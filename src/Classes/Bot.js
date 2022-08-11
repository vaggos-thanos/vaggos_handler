const { Client, Collection } = require("discord.js")
const fs = require("fs");
const path = require("path");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

class Bot extends Client {
    constructor(args) {
        super(args);

        this.commands = new Collection();
        this.events = new Collection();
    }

    async InitCommands(dir) {
        const commands = fs.readdirSync(path.join(__dirname, dir))
        for (const file of commands) {
            if(file.endsWith('.js')) {
                const CmdFile = await require(path.join(__dirname, dir, file))
                const command = new CmdFile(this)
                if(command.name !== file.split(".js")[0]) return console.log(`Command name mismatch: ${file} vs ${command.name}`)
                await this.commands.set(command.name, command)
                console.log(`Loaded command: ${file}`)
            } else if (fs.lstatSync(path.join(__dirname, dir, file)).isDirectory()) {
                this.InitCommands(path.join(dir, file))
            } else {
                console.log(`Ignored file: ${file}`)
            }
        }
    }

    async InitEvents(dir) {
        const events = fs.readdirSync(path.join(__dirname, dir))
        for (const file of events) {
            if(file.endsWith('.js')) {
                const CmdFile = await require(path.join(__dirname, dir, file))
                const event = new CmdFile(this)
                await this.events.set(event.name, event)
                if(event.once) {
                    this.once(event.name, (...args) => event.run(...args))
                } else {
                    this.on(event.name, (...args) => event.run(...args))
                }
                console.log(`Loaded event: ${file}`)
            } else if (fs.lstatSync(path.join(__dirname, dir, file)).isDirectory()) {
                this.InitEvents(path.join(dir, file))
            } else {
                console.log(`Ignored file: ${file}`)
            }
        }
    }

    async SlashCommandBuild(ClientID, GuildID, scope) {
        let dir = '../commands';
        const SlashCommands = [];

        const commands = fs.readdirSync(path.join(__dirname, dir))
        for (const file of commands) {
            if(file.endsWith('.js')) {
                const CmdFile = await require(path.join(__dirname, dir, file))
                const command = new CmdFile(this)
                if(command.name !== file.split(".js")[0]) return console.log(`Command name mismatch: ${file} vs ${command.name}`)
                await SlashCommands.push((command.getSlashCommandBuilder()).toJSON())
                console.log(`Slash Command is Ready for Build: ${file}`)
            } else if (fs.lstatSync(path.join(__dirname, dir, file)).isDirectory()) {
                this.InitCommands(path.join(dir, file))
            } else {
                console.log(`Ignored file: ${file}`)
            }
        }
        console.log(SlashCommands)
        console.log(`Registering slash commands for ${GuildID}`);
        console.log(`Client ID: ${ClientID}`);

        const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

        if(scope == "local") {
            rest.put(Routes.applicationGuildCommands(ClientID, GuildID), { body: SlashCommands })
            .then(() => console.log('Successfully registered application commands [LOCAL].'))
            .catch(error => {
                console.log(`Error registering application commands: ${error}`)
                console.log(error);
            });
        } else if (scope == "global") {
            rest.put(Routes.applicationCommands(ClientID), { body: SlashCommands })
            .then(() => console.log('Successfully registered application commands [GLOBAL].'))
            .catch(error => {
                console.log(`Error registering application commands: ${error}`)
            });
        }
    }

    async Start(token) {
        await this.InitCommands('../commands');
        await this.InitEvents('../listeners');
        await super.login(token);
    }
}

module.exports = Bot;