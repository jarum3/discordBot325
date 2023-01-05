// Dependencies
require('dotenv').config();
const { Client, Events, IntentsBitField } = require('discord.js');
const botIntents = new IntentsBitField();
// Declaring intents
botIntents.add(IntentsBitField.Flags.GuildMessages);
const client = new Client({ intents: botIntents }); // Creates client with intents in botIntents

// Startup message
client.once(Events.ClientReady, c => {
  console.log(`logged in as ${c.user.tag}!`);
});


// Last line
client.login(process.env.CLIENT_TOKEN);