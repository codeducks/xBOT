const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
const conf = require("../../utils/global.json");

module.exports.run = async (bot, message, args) => {
  // thanks to Will for this code.
  message.delete();
  random = Math.floor((Math.random() * 2) + 1);

  if(args[0] == "-h") {
    const embed = new Discord.MessageEmbed();
    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + "", false);
    embed.addField("purpose:", "look at the name.", false);
    message.channel.send(embed);
    return;

  }

  // comes before the result
  const start = [
    "It is da: ",
    "ANNNNNDDDDD: ",
    "It is: ",
    "You got: "
  ]

  // randomizes it.
  var srtat = Math.floor(Math.random() * start.length);

  if (random == 1) {
    var result = "heads"
  } else {
    var result = "tails"
  }

  embed.setColor('RANDOM');
  embed.setTitle('Coinflip');
  embed.setDescription(start[srtat] + conf.md + result + conf.md);
  embed.setTimestamp();
  
  message.reply(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: "coinflip",
  aliases: []
}