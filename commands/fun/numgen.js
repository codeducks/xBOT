const Discord = require('discord.js');
const conf = require("../../utils/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  message.delete();
  const embed = new Discord.MessageEmbed();

  if(args[0] == "-h") {
    const embed = new Discord.MessageEmbed();
    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + "", false);
    embed.addField("purpose:", "Generates a number.", false);
    message.channel.send(embed);
    return;

  }

  // comes before the number
  const start = [
    "Your number: ",
    "The number you requested: ",
    "Here you go kind sir: ",
    "Da number is: "
  ]

  // randomizes it.
  var srtat = Math.floor(Math.random() * start.length);
  
  if (args == "") {
    
    var random = Math.floor(Math.random() * conf.num_def);
  
  } else {
  
    var random = Math.floor(Math.random() * args);
        
  }

  embed.setColor('RANDOM')
  embed.setTitle("Random number generator. (sort of)");
  embed.setDescription(start[srtat] + conf.md + random + conf.md);
  embed.setTimestamp();
  
  message.reply(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: "numgen",
  aliases: []
}