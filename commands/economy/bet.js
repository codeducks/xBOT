const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
const Database = require('better-sqlite3');
const db = new Database('./main.db');

module.exports.run = async (bot, message, args) => {

  // checking for undefined args.
  if (!args[0]) {message.reply("please specify how much coins you want to bet.")
    return;}
  if (!args[1]) {return;}

  embed.setColor('RANDOM');
  embed.setTitle("Bet");
  var result = db.prepare("SELECT coins FROM main WHERE id = ?").get(message.author.id)
  if (result === undefined || result.coins == 0 || result.coins < args[0]) {
   embed.setDescription("You can't place a bet with no money dumdum")
  } else {
      random = Math.floor((Math.random() * 2) + 1);

      if (random == 1) {
        var flipresult = "heads"
      } else {
        var flipresult = "tails"
      }

      if (args[1] == flipresult) {
          db.prepare(`UPDATE main SET coins = ? WHERE id = ?`).run((result.coins + parseInt(args[0])), message.author.id);
          embed.setDescription("You won " + args[0] + " coins")
      } else {
        db.prepare(`UPDATE main SET coins = ? WHERE id = ?`).run((result.coins - parseInt(args[0])), message.author.id);
        embed.setDescription("You lost your bet. You suck.")
      }
      embed.setFooter(`You bet ${args[0]} coins on ${args[1]} and the coin flipped ${flipresult}`)
  }
  message.channel.send(embed)
  }
  
  module.exports.help = {
      name: "bet",
      aliases: []
    }