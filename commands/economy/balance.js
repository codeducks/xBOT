const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
const Database = require('better-sqlite3');
const db = new Database('./main.db');

module.exports.run = async (bot, message, args) => {
  authorUsername = message.author.username
  embed.setColor('RANDOM');
  embed.setTitle("Balance");
  var result = db.prepare("SELECT coins FROM eco WHERE id = ?").get(message.author.id)
  embed.setDescription(`${authorUsername} has ${result.coins} coins`)
  
  message.reply(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: "balance",
  aliases: ["bal"]
}