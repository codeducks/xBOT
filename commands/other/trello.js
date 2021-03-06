const Discord = require('discord.js');
const Trello = require('trello');
const env = require('dotenv');
const exp = require('../../exports');
const config = require("../../utils/global.json");
const { randomInt } = require('crypto');

var t = new Trello(process.env.TRELLO_APP_KEY, process.env.TRELLO_USER_TOKEN);

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const embed = new Discord.MessageEmbed();

    const tcid = Math.floor(Math.random() * 10000)

    exp.log(`trello > ${tcid} > ${message.member.id} (${message.member.user.tag})`)

    const words = Math.ceil(args.length / 2)

    t.addCard(`${tcid}: ${args.slice(0, words).join(" ")}...`, `${message.member.user.tag} : ${args.join(" ")}`, "5ff2059a0c697f1a32b30ed9", (error, trellocard) => {

        message.delete();
        embed.setColor('RANDOM');
        embed.setTitle("Trello Feature Request");

        if (error) {

            console.log(error)
            return;

        }

        embed.setDescription(`added card: ${trellocard.name}`)
        embed.setURL(trellocard.shortUrl)
        console.log(trellocard)

        message.channel.send(embed);

    })

}

//name this whatever the command name is.
module.exports.help = {
  name: 'trello',
  aliases: ["featurerequest", "featreq"]
}