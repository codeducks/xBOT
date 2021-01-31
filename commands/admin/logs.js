const Discord = require('discord.js');
const env = require('dotenv');
const exp = require('../../exports');
const config = require("../../utils/global.json");

module.exports.run = function (bot, message, args) {
  //this is where the actual code for the command goes
  const embed = new Discord.MessageEmbed();
  if(message.author.id != process.env.OWNER) return;

  var idate = exp.date();

  exp.log("Logs were requested.");
  message.author.send("Logs:", { files: [`./logs/${idate}.txt`]});

}

//name this whatever the command name is.
module.exports.help = {
  name: 'logs',
  aliases: []
}