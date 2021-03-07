const Discord = require('discord.js');
const exp = require('../../exports')
const env = require('dotenv');
const hue = require("../../utils/hue")

module.exports.run = async (bot, message, args) => {
    //this is where the actual code for the command goes
    const embed = new Discord.MessageEmbed();
    message.delete();
    if(!args[0] || !args[1] || !args[2]) return;

    var gID = args[1]

    switch (args[0]) {
        case "t":
        case "toggle":
            if (args[2] == "on") {

                var data = {"on": true}
                hue.group(gID, data)
                embed.addField("sent_data", JSON.stringify(data))

            } else if (args[2] == "off") {

                hue.group(gID, data)
                embed.addField("sent_data", JSON.stringify(data))

            }
        break;

        case "b":
        case "brightness":

            var data = { "bri": Number(args[2]) }
            hue.group(gID, data)
            embed.addField("sent_data", JSON.stringify(data))

        break;

        case "ct":
        case "tone":
            var data = { "ct": Number(args[2]) }
            hue.group(gID, data)
            embed.addField("sent_data", JSON.stringify(data))
        break;

    }

    embed.setTitle("Hue Lights")
    embed.setColor('RANDOM')
    embed.setDescription("Changed state for group: " + gID)

    message.channel.send(embed)

}

//name this whatever the command name is.
module.exports.help = {
  name: 'group',
  aliases: ["g", "groups"]
}