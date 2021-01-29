const Discord = require("discord.js")
require('dotenv').config();
const global = require("./utils/global.json")
const fs = require("fs")
const bot = new Discord.Client();
const exp = require('./exports');
const http = require('http');
const { default: got } = require("got/dist/source");
const Database = require('better-sqlite3');
const db = new Database('./main.db');

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

if(process.env.TOKEN === "setmeplease") return console.log("[!] Set your token up! Go to https://www.discordapp.com/developers and generate a token from a bot user.");

console.clear();
console.log("Loading...")

bot.on("ready", () => {

  console.clear()
  console.log( bot.user.username + " CONSOLE")
  console.log("------------")
  
  exp.botStart();

  global.defaultmodules.forEach((f, i) =>{
    exp.load(f);
  });

  bot.user.setActivity(global.name, {
    type: global.presence // ! WATCHING, STREAMING, LISTENING OR PLAYING set it in global.json
  });

  console.log("[!] " + bot.user.username + " is online.")
  console.log("------------");

  // unquote if on heroku
  // setInterval(function() {got(global.heroku)}, 900 * 1000)

});

bot.on("message", async message => {
  //a little bit of data parsing/general checks

  exp.onMessage(message.content, message.author.id);
  if (exp.sanitiser(message.content) == true) {
    message.delete();
    message.reply("that's a no-no word!")
  }

  if (message.content.indexOf(global.prefix) !== 0) return;
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return; // ? comment out if you want to enable commands in DMs.
  
  let content = message.content.toLowerCase().split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = global.prefix;


  const commandfile = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)));
  if(commandfile) commandfile.run(bot,message,args);
})

exports.loadCommand = function(a, b){bot.commands.set(a, b)} // for adding commands to the bot
exports.loadAlias = function(c, d){bot.aliases.set(c, d)} // for adding aliases to the bot
exports.reload = function(arg, module) {
  console.clear();
  bot.commands = new Discord.Collection();
  bot.aliases = new Discord.Collection();
  console.log("Bot was reloaded.");
  console.log("------------");

  switch (arg) {
    case '--module':
    case '-m': 
    exp.load("default");
    exp.load(module);
    break;

    case '--nothing':
    case '-n':
    break;

    case '--only':
    case '-o':
    exp.load(module);
    break;

    default:
      exp.load("default");
    break;
  }
  
}

bot.login(process.env.TOKEN) // change your token in the global.json
