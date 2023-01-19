const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('selectexample')
    .setDescription('Example for a select menu.'),
  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(new StringSelectMenuBuilder()
      .setCustomId('Select')
      .setPlaceholder('Nothing selected')
      .setMinValues(1)
      .setMaxValues(2)
      .addOptions([
        {
          label: 'CSC-314',
          description: 'Example text describing the class',
          value: 'CSC-314',
        },
        {
          label: 'CSC-325',
          description: 'Example text for CSC-314 description',
          value: 'CSC-325',
        },
      ]));
    await interaction.reply({ content: 'Select menu example', components: [row] });
  },
};
