const Discord = require('discord.js');
const global = require("../configs/global.json");
const config = require("../../config.json");
const env = require('dotenv');
const got = require('got');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
    const embed = new Discord.RichEmbed();

    const user = message.guild.members.get(process.env.OWNER);
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

    if (args[0] == "changelog" ) {
      embed.setTitle("Changelog");
      embed.setColor('RANDOM');
      embed.addField(global.info.ft1, global.info.fc1, false);
      embed.addField(global.info.ft2, global.info.fc2, false);

      embed.setTimestamp();

      message.channel.send(embed);
      return;

    } else {

        embed.setTitle("Bot Info");
        embed.setColor('RANDOM');
        embed.addField( "Bot Owner" , user, true);
        embed.addField("Uptime:", format(uptime), true);
        embed.addField("Bot Commands", global.cmds, false);

        embed.setTimestamp();

        message.channel.send(embed);
        return;
    }
}

//name this whatever the command name is.
module.exports.help = {
  name: 'info',
  aliases: ['bot']
}