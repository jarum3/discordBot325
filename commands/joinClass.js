const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('joinclass')
    .setDescription('Join a class role, for classes that you\'re currently taking this semester.'),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    interaction.editReply(`Pong!\nTook ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};