require('dotenv').config();
const { Intents } = require("discord.js");
const Bot = require("./Classes/Bot.js");

const client = new Bot({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ]
})

client.SlashCommandBuild("clientID", "guildId", 'scope')