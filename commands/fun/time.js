const Discord = require('discord.js');
const conf = require('../../utils/global.json');
const embed = new Discord.MessageEmbed();
var date = new Date();

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  
  if(args[0] == "-h") {
    const embed = new Discord.MessageEmbed();
    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + "", false);
    embed.addField("purpose:", "Shows the time.", false);
    message.channel.send(embed);
    return;

  }

    var tz = date.getTimezoneOffset() / 60;
    var h = date.getHours();
    var m = date.getMinutes();
    
    // what comes before the time.
    const start = [
      "It is currently: ",
      "The time is: ",
      "It is: ",
      "Da time is probably: "
    ]

    // randomizes it.
    var srtat = Math.floor(Math.random() * start.length);
    
    if (m < 10)
    {
        var time =  h + ":0" + m ; // :0 is neccesary otherwise it wont display properly.
    } else {
        var time = h + ":" + m;
    }


    embed.setColor('RANDOM');
    embed.setTitle(start[srtat] + conf.md + time + " UTC" + tz + conf.md);

    message.reply(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: "time",
  aliases: []
}