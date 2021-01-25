const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
const Database = require('better-sqlite3');
const db = new Database('./main.db');

module.exports.run = async (bot, message, args) => {
targetUsername = message.mentions.users.first()
authorUsername = message.author.username
  embed.setColor('RANDOM');
  embed.setTitle("Cash Gift");
  var result = db.prepare("SELECT coins FROM main WHERE id = ?").get(message.author.id)
  if (result.coins < args[1]) {
    embed.setDescription(`${authorUsername} is too broke to give ${targetUsername} ${args[1]} coins`)
  } else {
  var result2 = db.prepare("SELECT coins FROM main WHERE id = ?").get(message.mentions.users.first().id)
  db.prepare(`UPDATE main SET coins = ? WHERE id = ?`).run(result.coins - args[1], message.author.id);
  if (result2 === undefined) {
    db.prepare(`INSERT INTO main (id, coins) VALUES(?, ?);`).run(message.mentions.users.first().id, parseInt(args[1]));
    } else {
      db.prepare(`UPDATE main SET coins = ? WHERE id = ?`).run((result.coins + parseInt(args[1])), message.mentions.users.first().id);
    }
  embed.setDescription(`${authorUsername} gave ${targetUsername} ${args[1]} coins`)
  }
  message.reply(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: "give",
  aliases: []
}