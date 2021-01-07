const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const sophiehelp = new Discord.MessageEmbed()
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
    message.author.send("https://forms.gle/GwD7NcFYVjgekoW88").catch(
    message.reply("https://forms.gle/GwD7NcFYVjgekoW88")
    );
  }
}

//name this whatever the command name is.
module.exports.help = {
  name: "sophie",
  aliases: []
}