require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}!`);
});



// Last line
client.login(process.env.CLIENT_TOKEN);