const Discord = require('discord.js');
const env = require('dotenv');
const exp = require('../../exports')
const Database = require('better-sqlite3');
const db = new Database('./main.db');

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  const embed = new Discord.MessageEmbed();
  if (message.author.id !== process.env.OWNER) return;
  db.prepare("DROP TABLE eco").run();
  exp.log("[ADMIN] DROPPED THE 'eco' TABLE IN 'main.db'.")
  message.reply("The database has been destroyed, a new one will be created.");
  db.prepare(`CREATE TABLE "eco" ("id" TEXT NOT NULL, "coins" INTEGER NOT NULL)`).run();
}

//name this whatever the command name is.
module.exports.help = {
  name: 'dropeco',
  aliases: []
}