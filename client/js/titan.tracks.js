(function() {
  'use strict';

  var tracks = [
    // UI Sounds
    {url: 'audio/sound/connect.ogg', key: 'connect', type: 'sound', preload: 'auto', loop: false},
    {url: 'audio/sound/disconnect.ogg', key: 'disconnect', type: 'sound', preload: 'auto', loop: false},


    // Fun Sounds
    {url: 'audio/sound/crowd_cheer2.ogg', key: 'criticalHit', type: 'sound', category: 'fun', preload: 'auto', volume: 0.3, loop: false},
    {url: 'audio/sound/the-price-is-right-losing-horn.ogg', key: 'criticalMiss', type: 'sound', category: 'fun', preload: 'auto', volume: 0.2, loop: false},
    {url: 'audio/sound/toasty.ogg', key: 'toasty', type: 'sound', category: 'fun', volume: 1.0, loop: false},
    {url: 'audio/sound/levelup.ogg', key: 'levelUp', type: 'sound', category: 'fun', volume: 1.0, loop: false},


    // Environment Sounds
    {url: 'audio/sound/cicada1_lp.ogg', key: 'cicadas', type: 'sound', volume: 0.3, loop: true},
    {url: 'audio/sound/crickets2.ogg', key: 'crickets', type: 'sound', volume: 0.2, loop: true},
    {url: 'audio/sound/stream.ogg', key: 'stream1', type: 'sound', preload: 'none', loop: true},
    {url: 'audio/sound/stream1_lp.ogg', key: 'stream2', type: 'sound', preload: 'none', loop: true},
    {url: 'audio/sound/rain1_lp.ogg', key: 'rain1', type: 'sound', loop: true},
    {url: 'audio/sound/rain2_lp.ogg', key: 'rain2', type: 'sound', loop: true},
    {url: 'audio/sound/rain3_lp.ogg', key: 'rain3', type: 'sound', loop: true},
    {url: 'audio/sound/rain_outside.ogg', key: 'rainOutside', type: 'sound', loop: true},
    {url: 'audio/sound/rain_on_roofb.ogg', key: 'rainOutside2', type: 'sound', loop: true},
    {url: 'audio/sound/drips1_lp.ogg', key: 'drips', type: 'sound', loop: true},
    {url: 'audio/sound/breeze.ogg', key: 'breeze', type: 'sound', loop: true},
    {url: 'audio/sound/wind1_lp.ogg', key: 'wind1', type: 'sound', loop: true},
    {url: 'audio/sound/wind2_lp.ogg', key: 'wind2', type: 'sound', loop: true},
    {url: 'audio/sound/gale3a.ogg', key: 'wind3', type: 'sound', loop: true},
    {url: 'audio/sound/wind_outside.ogg', key: 'windOutside', type: 'sound', loop: true},
    {url: 'audio/sound/thunder1.ogg', key: 'thunder1', type: 'sound', loop: true},
    {url: 'audio/sound/thunder2.ogg', key: 'thunder2', type: 'sound', loop: false},
    {url: 'audio/sound/rumble.ogg', key: 'rumble', type: 'sound', preload: 'none', loop: false},


    // Civilization Sounds
    {url: 'audio/sound/blacksmith1.ogg', key: 'blacksmith', type: 'sound', preload: 'none', loop: true},
    {url: 'audio/sound/boat_in_harbor2.ogg', key: 'boatHarbor', type: 'sound', preload: 'none', loop: true},
    {url: 'audio/sound/knife_sharpening.ogg', key: 'knifeSharpen', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/repairs_b.ogg', key: 'repairs', type: 'sound', preload: 'none', loop: true},
    {url: 'audio/sound/construction.ogg', key: 'construction', type: 'sound', preload: 'none', loop: true},
    {url: 'audio/sound/coins_on_bar.ogg', key: 'coinsCounter', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/church_bell.ogg', key: 'churchBell', type: 'sound', loop: false},
    {url: 'audio/sound/bellpad2.ogg', key: 'bellpad', type: 'sound', preload: 'none', loop: true},


    // Prop sounds
    {url: 'audio/sound/torches.ogg', key: 'torches', type: 'sound', loop: true},
    {url: 'audio/sound/fireplace_loop_c.ogg', key: 'campfire1', type: 'sound', loop: true},
    {url: 'audio/sound/campfire1_lp.ogg', key: 'campfire2', type: 'sound', loop: true},
    {url: 'audio/sound/flag_wind.ogg', key: 'flagWind', type: 'sound', loop: true},
    {url: 'audio/sound/tavern_sign.ogg', key: 'signWind', type: 'sound', loop: true},
    {url: 'audio/sound/clock2.ogg', key: 'clock', type: 'sound', preload: 'none', loop: true},
    {url: 'audio/sound/distant_drums1_lp.ogg', key: 'distantDrums', type: 'sound', preload: 'none', loop: true},
    {url: 'audio/sound/war_drums_1.ogg', key: 'warDrums', type: 'sound', preload: 'none', loop: true},
    {url: 'audio/sound/war_horn_1.ogg', key: 'warHorn', type: 'sound', preload: 'none', loop: true},
    {url: 'audio/sound/rope_creaks_b.ogg', key: 'ropeCreak', type: 'sound', loop: true},
    {url: 'audio/sound/door_knock.ogg', key: 'doorKnock', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/door1_open.ogg', key: 'doorOpen1', type: 'sound', loop: false},
    {url: 'audio/sound/door1_close.ogg', key: 'doorClose1', type: 'sound', loop: false},
    {url: 'audio/sound/door_sm_open.ogg', key: 'doorOpen2', type: 'sound', loop: false},
    {url: 'audio/sound/door_sm_close.ogg', key: 'doorClose2', type: 'sound', loop: false},
    {url: 'audio/sound/door_open.ogg', key: 'doorOpen3', type: 'sound', loop: false},
    {url: 'audio/sound/door_close.ogg', key: 'doorClose3', type: 'sound', loop: false},
    {url: 'audio/sound/Gate_Open_00.ogg', key: 'gateOpen', type: 'sound', loop: false},


    // Horror Sounds
    {url: 'audio/sound/treble_tone1.ogg', key: 'tone1', type: 'sound', volume: 1.0, loop: true},
    {url: 'audio/sound/tone2.ogg', key: 'tone2', type: 'sound', volume: 1.0, loop: true},
    // {url: 'audio/sound/tone3.ogg', key: 'tone3', type: 'sound', volume: 1.0, loop: true},
    {url: 'audio/sound/tone4.ogg', key: 'tone4', type: 'sound', volume: 1.0, loop: true},
    {url: 'audio/sound/hi_tone_1.ogg', key: 'hiTone1', type: 'sound', volume: 1.0, loop: true},
    {url: 'audio/sound/hi_tone_2.ogg', key: 'hiTone2', type: 'sound', volume: 1.0, loop: true},
    {url: 'audio/sound/ethereal1_lp.ogg', key: 'ethereal1', type: 'sound', loop: true},
    {url: 'audio/sound/ethereal2_lp.ogg', key: 'ethereal2', type: 'sound', loop: true},
    {url: 'audio/sound/ethereal3_lp.ogg', key: 'ethereal3', type: 'sound', loop: true},
    {url: 'audio/sound/ethereal_dark1_lp.ogg', key: 'ethereal4', type: 'sound', loop: true},
    {url: 'audio/sound/dungeon_bg1.ogg', key: 'dungeonBG', type: 'sound', loop: true},
    {url: 'audio/sound/heartbeat.ogg', key: 'heartbeat1', type: 'sound', loop: true},
    {url: 'audio/sound/heartbeat2.ogg', key: 'heartbeat2', type: 'sound', loop: true},
    {url: 'audio/sound/riser1.ogg', key: 'riser1', type: 'sound', loop: false},
    {url: 'audio/sound/riser2.ogg', key: 'riser2', type: 'sound', loop: false},
    {url: 'audio/sound/pianohit.ogg', key: 'pianohit', type: 'sound', loop: false},
    {url: 'audio/sound/floor-creak-01.ogg', key: 'floorCreak', type: 'sound', volume: 0.2, loop: false},
    {url: 'audio/sound/scrape1a.ogg', key: 'scrape1', type: 'sound', volume: 0.3, loop: false},
    {url: 'audio/sound/screams.ogg', key: 'screams', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/spirit_breath1.ogg', key: 'spiritBreath', type: 'sound', loop: false},
    {url: 'audio/sound/children_laugh.ogg', key: 'childrenLaugh', type: 'sound', loop: false},
    {url: 'audio/sound/wail.ogg', key: 'wail', type: 'sound', loop: false},
    {url: 'audio/sound/whispers1.ogg', key: 'whispers1', type: 'sound', loop: false},
    {url: 'audio/sound/whispers2x.ogg', key: 'whispers2', type: 'sound', loop: false},
    {url: 'audio/sound/vortex.ogg', key: 'vortex', type: 'sound', loop: false},


    // Animal Sounds
    {url: 'audio/sound/hawk1.ogg', key: 'hawk', type: 'sound', loop: false},
    {url: 'audio/sound/owl2.ogg', key: 'owl', type: 'sound', loop: false},
    {url: 'audio/sound/bats.ogg', key: 'bats', type: 'sound', loop: false},
    {url: 'audio/sound/rats.ogg', key: 'rats', type: 'sound', loop: false},
    {url: 'audio/sound/flies.ogg', key: 'flies', type: 'sound', loop: false},
    {url: 'audio/sound/snake1.ogg', key: 'snake', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/dogs_barking2.ogg', key: 'dogsBarking1', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/dogs_barking.ogg', key: 'dogsBarking2', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/wolf_howl1.ogg', key: 'wolfHowl', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/snarl1.ogg', key: 'wolfSnarl', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/roar.ogg', key: 'roar', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/creature1.ogg', key: 'creature', type: 'sound', loop: false},
    {url: 'audio/sound/cows1a.ogg', key: 'cows', type: 'sound', loop: false},
    {url: 'audio/sound/chickens1a.ogg', key: 'chickens', type: 'sound', loop: false},
    {url: 'audio/sound/birdsong2.ogg', key: 'birdsong', type: 'sound', loop: false},


    // Combat Sounds
    {url: 'audio/sound/back_stab.ogg', key: 'stab', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/bow_single_shot.ogg', key: 'bow', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/club_attack.ogg', key: 'club', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/staff_attack.ogg', key: 'staff', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/shield_bash.ogg', key: 'shieldBash', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/heal_spell_1a.ogg', key: 'heal', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/conjuring.ogg', key: 'conjuring', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/earth_spell.ogg', key: 'earthSpell', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/fire_spell_2.ogg', key: 'fireSpell', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/ice_spell_2.ogg', key: 'iceSpell', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/spell_1.ogg', key: 'miscSpell', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/music_spell_2.ogg', key: 'musicSpell', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/explosion1.ogg', key: 'explosion1', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/explosion_1.ogg', key: 'explosion2', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/nature_spell.ogg', key: 'natureSpell', type: 'sound', preload: 'none', volume: 0.7, loop: false},
    {url: 'audio/sound/trap_arrow.ogg', key: 'trapArrow', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/trap_spike.ogg', key: 'trapSpike', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/Trap_01.ogg', key: 'trapBlade', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/magic_trap.ogg', key: 'trapMagic', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/trap_poison.ogg', key: 'trapPoison', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/trap_pit.ogg', key: 'trapPit', type: 'sound', preload: 'none', loop: false},
    {url: 'audio/sound/trap_gate.ogg', key: 'trapGate', type: 'sound', preload: 'none', loop: false},


    // Music
    {url: 'audio/music/music_1.ogg', key: 'music1', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/music_3a.ogg', key: 'music3', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/siren_song_lp.ogg', key: 'sirenSong', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/music_eerie_flute1.ogg', key: 'eerieFlute1', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/music_forest_action1.ogg', key: 'forestAction1', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/Somber_Music_Box.ogg', key: 'musicBox', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/celtic_harp_choir2.ogg', key: 'celticHarpChoir', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/Serenade.ogg', key: 'serenade', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/city_wonder_cue_a.ogg', key: 'cityWonder', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/hurdy_gurdy2.ogg', key: 'hurdyGurdy2', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/lute_ballad.ogg', key: 'luteBallad', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/combat1.ogg', key: 'combat1', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/music_forest_combat1.ogg', key: 'combat2', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/drum_music_1c.ogg', key: 'combat3', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/Toccata_and_Fugue_in_D_minor.ogg', key: 'tocattaFugue', type: 'music', preload: 'none', loop: true},
    {url: 'audio/music/Harpsichord_Concerto.ogg', key: 'harpsichordConcerto', type: 'music', preload: 'none', loop: true},
  ],
  div = document.createElement('div');

  div.id = 'connection';
  div.innerHTML = 'Disconnected';
  document.getElementById('connection').appendChild(div);
  titan.el = div;

  window.onload = (function() {
    titan.el.innerHTML = 'Connecting...';
    titan.addTracks(tracks);
    titan.connect();
  });

})();