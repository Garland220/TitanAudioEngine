import { Entity, BaseEntity, Column, ManyToOne, ManyToMany, OneToOne, JoinTable, PrimaryGeneratedColumn, AfterLoad } from 'typeorm';
import { Server } from '../';
import { Client, ClientController } from '../Clients';
import { Sound, SoundState } from '../Sounds';
import { User } from '../Users';


@Entity()
export class Room extends BaseEntity {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column({ length: 100 })
    private name: string;

    @Column('text')
    private description: string = '';

    @Column('text')
    private styleCSS: string = '';

    @Column({ length: 100 })
    private password: string = '';

    @Column({ length: 255 })
    private customURL: string = '';

    @Column({ length: 255 })
    private imageURL: string = '';

    @Column('double')
    private roomVolumeModifier: number = 1.0;

    @Column({ length: 100 })
    private ownerPassword: string = '';

    @Column('blob', { nullable: true })
    private stateJSON: string = '';

    @ManyToOne(type => User)
    @JoinTable()
    private owner: User;

    @ManyToMany(type => User)
    @JoinTable()
    private fullAccess: User[]; // Other users allowed to control this room

    @Column()
    private deleted: boolean = false;

    @Column()
    private public: boolean = false;

    @Column()
    private blockGuests: boolean = false;

    @Column()
    private lastActivity: Date = new Date();

    private soundState: SoundState;

    private clientCount: number = 0;
    private clientList: string[] = [];
    private active: boolean = false;

    public get ID(): number {
        return this.id;
    }

    public get Name(): string {
        return this.name;
    }
    public set Name(value: string) {
        this.name = value;
    }

    public get Description(): string {
        return this.description;
    }
    public set Description(value: string) {
        this.description = value;
    }

    public get ImageURL(): string {
        return this.imageURL;
    }
    public set ImageURL(value: string) {
        this.imageURL = value;
    }

    public get SoundState(): SoundState {
        return this.soundState;
    }

    public get StateJSON(): string {
        return this.stateJSON;
    }
    public set StateJSON(value: string) {
        this.stateJSON = value;
        this.Deserialize();
    }

    public get Channel(): string {
        if (this.customURL) {
            return this.customURL;
        }

        return this.id.toString();
    }

    public get Count(): number {
        return this.clientCount;
    }

    public get Active(): boolean {
        return this.active;
    }
    public set Active(value: boolean) {
        this.active = value;
    }

    public get HasPassword(): boolean {
        return !!this.password;
    }

    constructor(owner: User, name: string, description: string = '') {
        super();

        this.owner = owner;
        this.name = name;
        this.description = description;
    }

    public save(): Promise<this> {
        this.Serialize()
        return super.save();
    }

    @AfterLoad()
    protected afterLoad(): void {
        this.Deserialize();
    }

    protected Serialize(): void {
        // Handle saving state as JSON
        if (this.soundState) {
            this.stateJSON = JSON.stringify(this.soundState, (key, value) => {
                if (key === 'parent' || !value) {
                    return;
                }
                if (key === 'sound' && value.id) {
                    return value.id;
                }

                return value;
            });
        }
    }

    protected Deserialize(): void {
        // Handle loading state from JSON
        if (this.stateJSON) {
            let data = JSON.parse(this.stateJSON);
            this.soundState = new SoundState(data);
        }
    }

    public Kick(client: Client): void {
        if (!client || !(client instanceof Client)) {
            Server.Log(`Attempted to kick invalid client from '${this.name} (${this.id})'`);
            return;
        }

        client.Message(`You have been kicked.`);
        Server.Log(`${client.Name} has been kicked.`);
        this.Leave(client);
    }

    public CanJoin(client: Client, password: string): boolean {
        if (!client || !(client instanceof Client)) {
            return false;
        }
        if (this.clientList.indexOf(client.ID) !== -1) {
            return false;
        }
        if (this.blockGuests && client.IsGuest) {
            return false;
        }
        if (this.password) {
            return this.TryPassword(password);
        }
        return true;
    }

    public Join(client: Client, password: string): void {
        if (!client || !(client instanceof Client)) {
            Server.Log(`Invalid client attempted to join room '${this.name} (${this.id})'`);
            return;
        }

        if (this.CanJoin(client, password)) {
            this.clientCount += 1;
            this.clientList.push(client.ID);
            client.Room = this;
            client.Socket.join(this.Channel);

            Server.Log(`${client.Name} joined room '${this.name} (${this.id})'`);

        }
        else {
            client.Message(`Failed to join room.`);
            Server.Log(`${client.Name} failed to join room '${this.name} (${this.id})'`);
        }
    }

    public Leave(client: Client): void {
        if (!client || !(client instanceof Client)) {
            Server.Log(`Invalid client attempted to leave room '${this.name} (${this.id})'`);
            return;
        }

        const id = client.ID;
        if (this.clientList.indexOf(id) !== -1) {
            this.clientCount -= 1;
            this.clientList.splice(this.clientList.indexOf(id), 1);
            client.Room = null;
            client.Socket.leave(this.Channel);
        }

        Server.Log(`${client.Name} left room '${this.name} (${this.id})'`);
    }

    public Client(id: string): Client {
        if (ClientController.Get(id)) {
            return ClientController.Get(id);
        }

        return null;
    }

    public Clients(): { count: number, clients: string[] } {
        return {
            count: this.clientCount,
            clients: this.ListNames()
        };
    }

    public List(): string[] {
        return this.clientList;
    }

    public ListNames(): string[] {
        return this.clientList.map((id, index) => {
            return this.Client(id).Name;
        });
    }

    public TryPassword(password: string): boolean {
        return (this.password === password);
    }
}
