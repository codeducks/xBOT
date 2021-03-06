const Discord = require('discord.js');
const main = require('../../exports');
const config = require("../../utils/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
    const embed = new Discord.MessageEmbed();

    if(args[0] == "") {

      embed.setColor('RANDOM');
      embed.setTitle(exports.help.name + " help.");
      embed.addField("layout:", config.prefix + exports.help.name + " [server/channel]", false);
      embed.addField("purpose:", "Nukes the channel or the server.", false);
      message.channel.send(embed);
      return;
    }

    if(args[0] == "-h") {

      embed.setColor('RANDOM');
      embed.setTitle(exports.help.name + " help.");
      embed.addField("layout:", config.prefix + exports.help.name + " [server/channel]", false);
      embed.addField("purpose:", "Nukes the channel or the server.", false);
      message.channel.send(embed);
      return;
    }

    if(!message.member.hasPermission('ADMINISTRATOR')) return;

    if(args[0] == "channel"){
        message.channel.delete();
        main.stats("A channel was nuked!")
    }
}

//name this whatever the command name is.
module.exports.help = {
  name: 'nuke',
  aliases: []
}