const Discord = require('discord.js');
const global = require('../../utils/global.json');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const embed = new Discord.MessageEmbed();
  if (!args[0]){
    embed.setColor('RANDOM');
    embed.setTitle("help");
    embed.addField("commands!", global.cmds, false);
  } else {
    embed.setTitle("Help for " + args[0]);
    embed.setURL(global.web_url + args[0]);
  }
    message.channel.send(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: 'help',
  aliases: ['commands', 'helpme']
}