const Discord = require('discord.js');
const main = require('../../exports');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

  if(args[0] == "-h") {
    const embed = new Discord.MessageEmbed();
    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + " [USER]", false);
    embed.addField("purpose:", "Bans the specified user", false);
    message.channel.send(embed);
    return;

  }
   
  if (message.member.hasPermission('BAN_MEMBERS')){
      
    // Easy way to get member object though mentions.
    var mention = message.mentions.members.first();
    // Ban
  if (mention == undefined) {
      message.channel.send("specify a user please.")
  } else {
    mention.ban().then((member) => {
        // Successmessage
        message.delete();
        main.stats("user: " + mention.displayName + " (" + mention.id + ") has been banned on a guild!");
        message.channel.send(":wave: " + mention.displayName + " (" + mention.id + ") has been successfully banned!");
    }).catch(() => {
        // Failmessage
        message.channel.send("I can't!");
    });
  }
} else {
  message.reply("you do not have permission to do this.");
}

}

//name this whatever the command name is.
module.exports.help = {
  name: "ban",
  aliases: []
}