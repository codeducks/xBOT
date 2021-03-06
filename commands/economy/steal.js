const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
const Database = require('better-sqlite3');
const db = new Database('./main.db');

module.exports.run = async (bot, message, args) => {
  targetUsername = message.mentions.users.first()
  authorUsername = message.author.username
  if (message.author.id == message.mentions.users.first().id) return;
  embed.setColor('RANDOM');
  embed.setTitle('Cash "Gift"');
  var result = db.prepare("SELECT coins FROM eco WHERE id = ?").get(message.author.id)
  var result2 = db.prepare("SELECT coins FROM eco WHERE id = ?").get(message.mentions.users.first().id)
  if (result2 === undefined || args[1] > result2.coins) {
    embed.setDescription(`${targetUsername} doesn't have enough money for you to steal. Go find a guy in a lambo ya loser.`)
  } else {
    db.prepare(`UPDATE eco SET coins = ? WHERE id = ?`).run((result.coins - parseInt(args[1])), message.mentions.users.first().id);
    db.prepare(`UPDATE eco SET coins = ? WHERE id = ?`).run((result.coins + parseInt(args[1])), message.author.id);
    embed.setDescription(`${authorUsername} stole ${args[1]} coins from ${targetUsername}`)
  }
  message.channel.send(embed);
  }
  
  //name this whatever the command name is.
  module.exports.help = {
    name: "steal",
    aliases: ["rob", "pickpocket", "loot"]
  }