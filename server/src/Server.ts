import * as fs from 'fs';
import * as util from 'util';

import { Configuration } from './';
import { ClientController } from './Clients';
import { DatabaseController, HttpController, SocketController } from './Networking';

// const colors = require('colors');
// colors.setTheme({
//   silly: 'rainbow',
//   input: 'grey',
//   verbose: 'cyan',
//   prompt: 'grey',
//   info: 'green',
//   data: 'grey',
//   help: 'cyan',
//   warn: 'yellow',
//   debug: 'blue',
//   error: 'red',
//   broadcast: ['bold', 'green']
// });


export class Server {
    private static readonly debug: boolean = false;

    private static crashed: boolean = false;
    private static closing: boolean = false;

    private static activeUsers: number = 0;

    private static database: DatabaseController;
    private static http: HttpController;
    private static sockets: SocketController;

    public static Configuration: Configuration;

    public static get ActiveUsers(): number {
        return Server.activeUsers;
    }
    public static set ActiveUsers(value: number) {
        Server.activeUsers = value;
        // update listeners
    }

    public static get DB(): DatabaseController {
        return Server.database;
    }

    public static get HTTP(): HttpController {
        return Server.http;
    }

    public static get Sockets(): SocketController {
        return Server.sockets;
    }

    public static Broadcast(message: string): void {
        Server.Log('BROADCAST:', `"${message}"`);

        if (Server.sockets) {
            Server.sockets.IO.send('broadcast', message);
        }
    }

    public static Log(...args:any[]): void {
        console.log.apply(console, args);
    }

    public static Warn(...args:any[]): void {
        args.unshift('Warning:');
        console.warn.apply(console, args);
    }

    public static Error(...args:any[]): void {
        args.unshift('Error:');
        console.error.apply(console, args);
    }

    public static Start(config: any): void {
        Server.Log('Server is starting up...');
        Server.Configuration = new Configuration(config);
        Server.database = new DatabaseController(this, Server.Configuration);

        Server.database.Open().then((connection) => {
            Server.http = new HttpController(this, Server.Configuration);
            return Server.http.Open();
        }).then((http) => {
            Server.sockets = new SocketController(this, Server.Configuration);
            return Server.sockets.Open();
        }).catch((error) => {
            Server.Error(`Startup failed with error: ${error}`);
        });
    }

    public static CleanUp(): void {
        Server.Log('Doing pre-exit cleanup.');

        Server.DB.Close();
        Server.HTTP.Close();
        Server.Sockets.Close();
        Server.database = undefined;
        Server.sockets = undefined;
        Server.http = undefined;

        Server.Log('Cleanup complete.');
    }

    public static Stop(restart: boolean = false): void {
        if (Server.closing) {
            return;
        }

        Server.Broadcast(restart ? 'Server is restarting.' : 'Server is shutting down.');

        Server.Log('Stopping server...');
        Server.closing = true;

        Server.CleanUp();

        if (restart) {
            Server.Log('Server will restart.');
            // This is where my restart code would go... IF I HAD ANY!
        }

        Server.Log('Exiting...');
        process.exit(0); // kill process
    }
}

process.on('SIGINT', (signal) => {
    Server.Stop();
});
process.on('warning', (warning) => {
    Server.Warn(warning);
});
process.on(<any>'uncaughtException', (reason: string, location: string) => {
    Server.Error(reason, location);
});

