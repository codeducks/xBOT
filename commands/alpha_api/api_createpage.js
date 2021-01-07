const Discord = require('discord.js');
const app = require('express')();
const env = require('dotenv');
const exp = require('../../exports');
const config = require("../../configs/global.json");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const embed = new Discord.MessageEmbed();
  const content = args.slice(1);
  const address = args[0];

  if(fs.existsSync("./api/" + address + ".txt") == false) {
        fs.writeFile(`./api/${address}.txt`, content);
        var pageContent = fs.readFile(`../../api/${address}.txt`);
    } else {
        message.channel.send("sorry already exists.");
    }

  

  app.get("/" + address, (req, res) => {
      res.send(pageContent);
  })

  exp.api();
}

//name this whatever the command name is.
module.exports.help = {
  name: 'x',
  aliases: []
}