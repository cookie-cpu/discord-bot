// Require discord.js package
const Discord = require("discord.js");

// Create a new client using the new keyword
const client = new Discord.Client();

const {
    token
} = require("./token.json")

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
        msg.reply("This bot has 5 commands, !hello, !help, !10/12, !b and !randint");
    } 
    //10/12 command
    else if (toLower === '!10/12'){
        msg.reply('Nice reference');
    }
    // b emoji command
    else if (toLower === '!b'){
        msg.reply('🅱️');
    }
    // random int command
    else if (toLower === '!randint'){
        let num = Math.floor(Math.random() * 100);
        msg.reply(num)
    }
});


// Log in the bot with the token
client.login(token);