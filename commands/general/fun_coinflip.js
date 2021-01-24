const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
const conf = require("../../configs/global.json");

module.exports.run = async (bot, message, args) => {
  // thanks to Will for this code.
  random = Math.floor((Math.random() * 2) + 1);
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
  embed.setTitle(start[srtat] + conf.md + result + conf.md);
  
  message.reply(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: "coinflip",
  aliases: []
}