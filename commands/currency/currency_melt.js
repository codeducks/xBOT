const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed();
  const Database = require('better-sqlite3');
  const db = new Database('./main.db');
  
  module.exports.run = async (bot, message, args) => {
    if (message.member.nickname =! null) authorUsername = message.member.nickname
    else authorUsername = message.author.username
    embed.setColor('RANDOM');
    embed.setTitle('Free Gold?');
    var result = db.prepare("SELECT coins FROM main WHERE id = ?").get(message.author.id)
    if (args[1] > result2.coins) {
      embed.setDescription(`You don't have that many coins`)
      } else {
        db.prepare(`UPDATE main SET coins = ? WHERE id = ?`).run(result.coins - parseInt(args[1]), message.author.id);
        embed.setDescription(`${authorUsername} destroyed ${args[1]} coins`)
      }
    message.channel.send(embed);
  }
  
  //name this whatever the command name is.
  module.exports.help = {
    name: "melt",
    aliases: ["destroy", "drop"]
  }