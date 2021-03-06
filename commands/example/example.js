const Discord = require('discord.js');
const env = require('dotenv');
const exp = require('../../exports');
const config = require("../../utils/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const embed = new Discord.MessageEmbed();
  message.channel.send("this is an example");
}

//name this whatever the command name is.
module.exports.help = {
  name: 'x',
  aliases: []
}