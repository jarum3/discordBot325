// Dependencies
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, IntentsBitField } = require('discord.js');
const botIntents = new IntentsBitField();
// Declaring intents
botIntents.add(IntentsBitField.Flags.GuildMessages);
const client = new Client({ intents: botIntents }); // Creates client with intents in botIntents
client.commands = new Collection();
// Reading commands and adding them to collection

const commandsPath = path.join(__dirname, 'commands'); // Grabbing command directory
// Grabbing all files ending in .js
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // Create a command for each file, using the command name and value
  // Making sure that data and execute sections are intact
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  }
  else {
    console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
  }
}
// Startup message, only listens once
client.once(Events.ClientReady, c => {
  console.log(`logged in as ${c.user.tag}!`);
});

// Listener that logs each slash command when it is created, for testing purposes.
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;
  const command = interaction.client.commands.get(interaction.commandName); // Set command equal to the object in the command file.
  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`); // Print out an error if no command was found
    return;
  }

  try {
    await command.execute(interaction); // Run the execute block of the command
  }
  catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});


// Last line
client.login(process.env.CLIENT_TOKEN);