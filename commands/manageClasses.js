const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('manageclass')
    .setDescription('Menu for managing the list of classes available in the next semester.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    interaction.editReply(`Pong!\nTook ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};