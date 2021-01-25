const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
const Database = require('better-sqlite3');
const db = new Database('./main.db');


module.exports.run = async (bot, message, args) => {
    var result = db.prepare("SELECT coins FROM eco WHERE id = ?").get(message.author.id)
success = Math.floor((Math.random() * result.coins/2) + 1);
embed.setColor('RANDOM');
embed.setTitle("Begging");

if (success == 1) {
random = Math.floor((Math.random() * 60));
embed.setDescription("Here, have " + random + " coins")
db.prepare(`UPDATE eco SET coins = ? WHERE id = ?`).run(result.coins + random, message.author.id);
} else {
    embed.setDescription("Ew, go away beggar!")
}
message.channel.send(embed)
}

module.exports.help = {
    name: "beg",
    aliases: []
  }