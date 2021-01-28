const Discord = require('discord.js');
const main = require('../../index');
const global = require("../../utils/global.json");
const yarn = require("../../package.json");
const exp = require('../../exports')
const env = require('dotenv');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
    const embed = new Discord.MessageEmbed();
    const user = message.guild.members.cache.get(process.env.OWNER);
    //const userTag = `${user.username}#${user.discriminator}`;

    function format(seconds){
      function pad(s){
        return (s < 10 ? '0' : '') + s;
      }
      var hours = Math.floor(seconds / (60*60));
      var minutes = Math.floor(seconds % (60*60) / 60);
      var seconds = Math.floor(seconds % 60);
    
      return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    }
    
    var uptime = process.uptime();

    switch(args[0]) {

      case '-h':
      //  const embed = new Discord.MessageEmbed();
        embed.setColor('RANDOM');
        embed.setTitle(exports.help.name + " help.");
        embed.addField("layout:", global.prefix + exports.help.name + " (changelog)", false);
        embed.addField("purpose:", "either show the bot info or changelog", false);
        message.channel.send(embed);
      return;

      case 'load':
        if(message.author.id != process.env.OWNER) {
          message.channel.send("You can't load modules, you are not the bot owner.");
          return;
        }
  
        if(args[1] == "all"){
          const testFolder = './commands';
          const fs = require('fs');
  
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

      case 'changelog':
      //  const embed = new Discord.MessageEmbed();
        embed.setTitle("Changelog");
        embed.setColor('RANDOM');
        embed.addField("Link to the changelog", global.changelog, false);
  
        embed.setTimestamp();
  
        message.channel.send(embed);
      return;

      default:
      //  const embed = new Discord.MessageEmbed();
        embed.setTitle("Bot Info");
        embed.setColor('RANDOM');
        embed.addField( "Bot Owner" , user, true);
        embed.addField("Uptime:", format(uptime), true);
        embed.addField("Version:", yarn.version, true);
        // embed.addField("Loaded Modules:", loadedModules.join(", "), false); // ! maybe later.
        embed.addField("Bot Commands", global.cmds, false);
        if(process.env.CLIENTID) embed.addField("Invite:", "https://discord.com/api/oauth2/authorize?client_id=" + process.env.CLIENTID + "&permissions=8&scope=bot")

        embed.setTimestamp();

        message.channel.send(embed);
      return;

    }

}

//name this whatever the command name is.
module.exports.help = {
  name: 'bot',
  aliases: ['info']
}