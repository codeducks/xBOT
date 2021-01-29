const Discord = require('discord.js');
const fs = require('fs');
const env = require('dotenv')
const exp = require('../../exports');
const config = require("../../utils/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

  if (message.author.id != process.env.OWNER) { return; }

  switch (args[0]) {
    case 'set':
        if(!config[args[1]]) {
            message.reply("doesn't exist.");
            return;
        }
    
        switch (args[2]) {
            case 'true':
                correctTerms = true
            break;

            case 'false':
                correctTerms = false
            break;

            default:
                correctTerms = args[2]
            break;
        }
        message.channel.send(exp.buildembed("Configuration.", `Set property: '${args[1]}' to ${correctTerms}`, "Use with caution.", true));
        config[args[1]] = correctTerms;
        fs.writeFile("../../configs/global.json", JSON.stringify(config), (err) => console.error);

    break;
  
    case 'sanitise':

        if (config.sanitise.hasOwnProperty(args[1]) == false) {
            message.reply("doesn't exist.");
            return;
        }

        // boolean => boolean, string => string
        switch (args[2]) {

            case 'true':
                sanitiseTerms = true
            break;

            case 'false':
                sanitiseTerms = false
            break;

            default:
                sanitiseTerms = args[2]
            break;

        }

        message.channel.send(exp.buildembed("Sanitise configuration.", `Set property: '${args[1]}' to ${sanitiseTerms}`, "Use with caution.", true));
        config.sanitise[args[1]] = sanitiseTerms;
        fs.writeFile("../../configs/global.json", JSON.stringify(config), (err) => console.error);

    break;

    }
}

//name this whatever the command name is.
module.exports.help = {
  name: 'config',
  aliases: []
}