const Discord = require('discord.js');
const fs = require('fs');
const env = require('dotenv');
const main = require('../../index');
const exp = require('../../exports');
const config = require("../../utils/global.json");
const rp = require('request-promise')
const jsdom = require('jsdom');
const path = require('path')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

  if (message.author.id != process.env.OWNER) { return; }

  switch (args[0]) {

    case 'dl':
      if(message.author.id != process.env.OWNER) {
        message.channel.send("You can't load modules, you are not the bot owner.");
        return;
      }

      rp(String(args[1]))
        .then(function(html) {

        const { JSDOM } = jsdom
        const dom = new JSDOM(html)
        const code = dom.window.document.querySelector("pre").textContent;

        fs.appendFile(`./plugins/${path.basename(args[1])}.js`, code)

      }).catch(function(error) {

        message.reply("could not download the plugin from: " + config.md + args[2] + config.md)

      })

    return;

    case 'load':
        if(message.author.id != process.env.OWNER) {
          message.channel.send("You can't load modules, you are not the bot owner.");
          return;
        }
  
        if(args[1] == "all"){
          const testFolder = './commands';
  
          var modules = []
  
          fs.readdir(testFolder, (err, files) => {
            message.channel.send("Loading...");
  
            files.forEach(file => {
              if(file == global.defaultmodules) {
                return
              } else {
              exp.load(file);
              }
            });
            message.channel.send("Loaded: **" + files.join(", ") + "**");
          });
          return
        }
  
        if(exp.check(args[1]) == true) {
          message.channel.send("Loading...");
          exp.load(args[1]);
          message.channel.send("Loaded: **" + args[1] + "**");
        } else {
          message.channel.send("doesn't exist, bud.");
        }
        return;
  
      case 'reload':
        if(message.author.id != process.env.OWNER) return;
        main.reload(args[1], args[2]);
        message.channel.send("Reloaded!");
      return;

    case 'set':
        if(config.hasOwnProperty(args[1]) == false) {
            message.reply("doesn't exist.");
            return;
        }
    
        correctTerms = exp.formatter(args[2])

        if (correctTerms = Array) {
          msgterms = "[Object]"
        } else {
          msgterms = correctTerms
        }

        message.channel.send(exp.buildembed("Configuration.", `Set property: '${args[1]}' to ${msgterms}`, "Use with caution.", true));
        config[args[1]] = correctTerms;
        fs.writeFile("../../configs/global.json", JSON.stringify(config), (err) => console.error);

    break;
  
    case 'sanitise':

        if (config.sanitise.hasOwnProperty(args[1]) == false) {
            message.reply("doesn't exist.");
            return;
        }

        // boolean => boolean, string => string
        
        sanitiseTerms = exp.formatter(args[2])

        message.channel.send(exp.buildembed("Sanitise configuration.", `Set property: '${args[1]}' to ${sanitiseTerms}`, "Use with caution.", true));
        config.sanitise[args[1]] = sanitiseTerms;
        fs.writeFile("../../configs/global.json", JSON.stringify(config), (err) => console.error);

    break;

    }
}

//name this whatever the command name is.
module.exports.help = {
  name: 'bot',
  aliases: []
}