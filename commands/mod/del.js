const Discord = require('discord.js');
const main = require('../../exports');


module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

  if(args[0] == "-h") {
    const embed = new Discord.MessageEmbed();
    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + " [1-100]", false);
    embed.addField("purpose:", "Deletes 1-100 messages.", false);
    message.channel.send(embed);
    return;

  }

   if (message.member.hasPermission('MANAGE_MESSAGES')) {
    const deleteCount = parseInt(args[0], 10);

    if (!deleteCount || deleteCount < 1 || deleteCount > 100) return;
    
    message.channel.bulkDelete(deleteCount + 1).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    
  } else {
      message.reply("You do not have permission to execute this command!");
  }
}

//name this whatever the command name is.
module.exports.help = {
  name: "del",
  aliases: ['delete', 'purge']
}