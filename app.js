//Require dotenv to load bot token
require('dotenv').config();
const TOKEN = process.env.TOKEN || "";

//console.log(`Discord Bot Token: ${TOKEN}`);

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


// Functions
const reverseStr = function(str){
    let splitStr = str.split("");
    let reverse = splitStr.reverse();
    let joined = reverse.join("")
    return joined;
  }

// Display a message once the bot has started
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Check messages for a specific command
client.on("message", msg => {

    //console.log(msg);
    //console.log(`${msg.author.username} Sent a message`);


    
    //makes message lowercase for !commands to easily match
    const command = msg.content.toLowerCase();
    
    

    // Send back a reply when the specific command has been written
    switch (command) {
        case '!hello':
            msg.reply("Hello world!");
            break;
        case '!help':
            msg.reply("This bot has 4 commands, !hello, !help, !bmoji and ");
            break;
        case '!bmoji':
            msg.reply('🅱️');
            break;
        default:
            break;
    }

    // random int command
    // else if (toLower === '!randint'){
    //     let num = Math.floor(Math.random() * 100);
    //     msg.reply(num)
    // }
    //TODO change array range to target command but slice rest of message for reversal function
    // else if (toLower === '!reverse'){
    //     msg.reply(reverseStr(toLower))
    //     //msg.reply(toLower)
    // }
});


// Log in the bot with the token
client.login(TOKEN);