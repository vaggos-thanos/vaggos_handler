const { SlashCommandBuilder } = require('@discordjs/builders');

class Command {
    constructor(name, description, cooldown, ownerOnly) {
        this.name = name;
        this.description = description;
        this.cooldown = cooldown;
        this.ownerOnly = ownerOnly;
    }

    getSlashCommandBuilder() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
    }

    run(interaction) {}
}

module.exports = Command;