const Discord = require('discord.js');
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const sophiehelp = new Discord.RichEmbed()
  .setTitle("Sophie")
  .setDescription("Sophie is an AI Powered child predator prevention bot!")
  .setColor("#1cfc72s")
  .addField("Report to Sophie", "https://forms.gle/GwD7NcFYVjgekoW88", false)
  .addBlankField()
  .addField("GitHub", "https://github.com/sophieproject/sophiebot", false)
  .addField("Founder", "https://github.com/WillKenzie", true)
  .addField("Founder 2", "https://github.com/faultydev", true)
  .setFooter("this is an ad.");

  if (args == "") {
    message.channel.send(sophiehelp)
  }
  if (args == "report") {
    console.log("[!] Someone may have reported someone to Sophie!");
    message.reply("https://forms.gle/GwD7NcFYVjgekoW88");
  }
}

//name this whatever the command name is.
module.exports.help = {
  name: "sophie"
}