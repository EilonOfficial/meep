const Discord = require("discord.js");
const Commando = require("discord.js-commando");

const Client = new Commando.Client({
    owner: "227238361964871682",
    commandPrefix: "-",
});

const path = require("path");
const fs = require("fs");

//Registration

Client.registry.registerDefaultTypes();
Client.registry.registerGroups([
    ['main', 'Main']
]);
Client.registry.registerDefaultGroups();
Client.registry.registerCommandsIn(path.join(__dirname, 'commands'));
Client.registry.registerDefaultCommands();

//Events

Client.on('debug', (debug) => {
    console.log(debug);
});

//Authentication

Client.login(process.env.phantomutiltoken);
