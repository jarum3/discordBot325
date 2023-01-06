const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('optin')
    .setDescription('Gain roles related to game jams, notifications, etc.'),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    interaction.editReply(`Pong!\nTook ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};