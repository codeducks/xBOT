const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const embed = new Discord.MessageEmbed();
  embed.setTitle("Pineapple?")
  embed.setDescription(`You put a gun to your chin
  You pull the trigger
  Pineapples.
  Your head is now a pineapple.`)
  message.channel.reply(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: 'suicide',
  aliases: []
}