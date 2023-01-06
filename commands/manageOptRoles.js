const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('manageoptins')
    .setDescription('Menu for managing the list of opt-in roles..')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    interaction.editReply(`Pong!\nTook ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};