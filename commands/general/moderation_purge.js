const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission(['MANAGE_MESSAGES'])) {
        message.channel.bulkDelete(args[0], true)
    }
}
module.exports.help = {
    name: "purge",
    aliases: []
  }