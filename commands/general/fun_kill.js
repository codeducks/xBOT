const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
const Database = require('better-sqlite3');
const db = new Database('./main.db');

module.exports.run = async (bot, message, args) => {
  targetUsername = message.mentions.users.first().targetUsername
  authorUsername = message.author.username
  embed.setColor('RANDOM');
  embed.setTitle("Murder");
  db.prepare(`UPDATE main SET coins = ? WHERE id = ?`).run(1, message.mentions.users.first().id);
  const killmessages = [`${authorUsername} just killed ${targetUsername}`, `${authorUsername} sucked ${targetUsername} so hard they died`, `${authorUsername} blew ${targetUsername}'s brains out`, `${authorUsername} popped ${targetUsername} in the dick, so they died`, `${authorUsername} made ${targetUsername} cry so much they dehydrated to death`, `${authorUsername}, sick of ${targetUsername}'s shit, threw a toaster in their bath`]
  embed.setDescription(killmessages[Math.floor(Math.random()*killmessages.length)])
  
  message.channel.send(embed);
  message.channel.send(`<@${targetUsername}> your coins have been donated to charity.`)
}

//name this whatever the command name is.
module.exports.help = {
  name: "kill",
  aliases: ["murder"]
}