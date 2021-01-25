const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
const Database = require('better-sqlite3');
const db = new Database('./main.db');

module.exports.run = async (bot, message, args) => {
    if (args[0] === undefined) return;
  embed.setColor('RANDOM');
  embed.setTitle("Bet");
  var result = db.prepare("SELECT coins FROM main WHERE id = ?").get(message.author.id)
  if (result === undefined || result.coins == 0 || result.coins < args[1]) {
   embed.setDescription("You can't place a bet with no money dumdum")
  } else {
      random = Math.floor((Math.random() * 2) + 1);
      if (random == args[0]) {
          db.prepare(`UPDATE main SET coins = ? WHERE id = ?`).run((result.coins + parseInt(args[1])), message.author.id);
          embed.setDescription("You won " + args[1] + " coins")
      } else {
        db.prepare(`UPDATE main SET coins = ? WHERE id = ?`).run((result.coins - parseInt(args[1])), message.author.id);
        embed.setDescription("You lost your bet. You suck.")
      }
      embed.setFooter(`You bet ${args[1]} coins on ${args[0]} and the coin flipped ${random}`)
  }
  message.channel.send(embed)
  }
  
  module.exports.help = {
      name: "bet",
      aliases: []
    }