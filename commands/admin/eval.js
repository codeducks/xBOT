const Discord = require('discord.js');
const env = require('dotenv');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  if (message.member.user.id !== process.env.OWNER) message.reply("you aint no bot owner!");
  if (message.member.user.id !== process.env.OWNER) return;

    const clean = text => {
        if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }

    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

        message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

//name this whatever the command name is.
module.exports.help = {
  name: "eval",
  aliases: []
}