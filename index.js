require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const botIntents = new IntentsBitField();
botIntents.add(IntentsBitField.Flags.GuildMessages);
const client = new Client({ intents: botIntents });


client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}!`);
});



// Last line
client.login(process.env.CLIENT_TOKEN);