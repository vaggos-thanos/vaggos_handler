const Command = require("../Classes/Command");

module.exports = class TestCommand extends Command {
    constructor(client) {
        super('test', 'Test command', 0, false);
    }

    getSlashCommandBuilder() {
        const builder = super.getSlashCommandBuilder();
        return builder;
    }

    async run(interaction) {
        interaction.reply('Test command');
    }
}