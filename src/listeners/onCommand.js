const Event = require('../Classes/Event.js')

module.exports = class onCommand extends Event {
    constructor(client) {
        super('interactionCreate', false);
        this.client = client;
    }

    async run(interaction) {
        if (!interaction.isCommand()) return;

        const command = this.client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.run(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
}