// Require discord.js package
const Discord = require("discord.js");

// Create a new client using the new keyword
const client = new Discord.Client();

// Display a message once the bot has started
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Check messages for a specific command
client.on("message", msg => {
    const toLower = msg.content.toLowerCase();
    // Send back a reply when the specific command has been written
    if (toLower === "!hello") {
        msg.reply("Hello world!");
    }

    // help command
    else if(toLower === '!help'){
        msg.reply("This bot has 2 commands, !hello and !help");
    }
});

// Log in the bot with the token
client.login("OTA1MTg4NzE0NzM5ODA2MzA4.YYGcrw.78_O3vMpoODEwPHKBN-eQot_fP8");