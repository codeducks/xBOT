const Discord = require('discord.js');

const config = require("../../utils/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

  if(args[0] == "-h") {
    const embed = new Discord.MessageEmbed();
    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + "", false);
    embed.addField("purpose:", "pong.", false);
    message.channel.send(embed);
    return;

  }

  const embed = new Discord.MessageEmbed();

  embed.setColor('RANDOM');
  embed.setDescription("Pong!");

  message.reply(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: 'ping',
  aliases: []
}