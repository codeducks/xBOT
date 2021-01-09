const Discord = require('discord.js');
const fs = require('fs');
const env = require('dotenv');
const config = require("../../configs/global.json");

exports.run = (client, message, args) => {

  if(args[0] == "-h") {
    const embed = new Discord.MessageEmbed();
    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + " " + exports.help.name + " [NEW PREFIX]", false);
    embed.addField("purpose:", "Change the prefix.", false);
    message.channel.send(embed);
    return;

  }

  if (message.member.user.id !== process.env.OWNER) return;

  console.log("[!] The prefix is now: " + args[0]);
  config.prefix = args[0];
  fs.writeFile("../configs/global.json", JSON.stringify(config), (err) => console.error);
  message.channel.send("Prefix changed successfully to: " + args[0]);

}

//name this whatever the command name is.
module.exports.help = {
  name: 'prefix',
  aliases: []
}