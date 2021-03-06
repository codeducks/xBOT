const Discord = require('discord.js');
const fs = require('fs');
const config = require("../../utils/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const embed = new Discord.MessageEmbed();

  if (message.member.user.id !== process.env.OWNER) message.reply("you aint no bot owner!");
  if (message.member.user.id !== process.env.OWNER) return;

  if(args[0] == "-h") {
    const embed = new Discord.MessageEmbed();
    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + " [WATCHING, LISTENING, PLAYING] " + '[what?]', false);
    embed.addField("Please note.", "Listening will say 'listening to', so don't add 'to' if you use LISTENING", false);
    message.channel.send(embed);
    return;
}

  config.presence = args[0];
  config.name = args.slice(1).join(" ");

  fs.writeFile("../configs/global.json", JSON.stringify(config), (err) => console.error);

  bot.user.setActivity(config.name, {
    type: config.presence // WATCHING, STREAMING, LISTENING OR PLAYING set it in global.json
  });
}

//name this whatever the command name is.
module.exports.help = {
  name: 'presence',
  aliases: []
}