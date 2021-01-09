const Discord = require('discord.js');
const main = require('../../exports');
const config = require("../../configs/global.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

  if(args[0] == "") {
    const embed = new Discord.MessageEmbed();
    embed.setColor('RANDOM');
    embed.setTitle(exports.help.name + " help.");
    embed.addField("layout:", config.prefix + exports.help.name + " [hash]", false);
    embed.addField("purpose:", "Hashes given string.", false);
    message.channel.send(embed);
    return;
  }

  const embed = new Discord.MessageEmbed();
  var precrypt = args.join(" ");
  var sha1 = main.hash(precrypt, "sha1");
  var sha256 = main.hash(precrypt, "sha256");
  var sha384 = main.hash(precrypt, "sha384");
  var sha512 = main.hash(precrypt, "sha512");
  var md5 = main.hash(precrypt, "md5");

  main.silent_log('string: "' + precrypt + '" was hashed into ' + sha1  + ", " + sha256 + ", " + sha384 + ", " + sha512 + ", " + md5 );

  message.delete();

  embed.setColor('RANDOM');
  embed.setTitle("Your hash:");
  embed.addField("SHA1", sha1, false)
  embed.addField("SHA256", sha256, false)
  embed.addField("SHA384", sha384, false)
  embed.addField("SHA512", sha512, false)
  embed.addField("MD5", md5, false)

  message.channel.send(embed);
}

//name this whatever the command name is.
module.exports.help = {
  name: 'hash',
  aliases: []
}