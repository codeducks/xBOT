const fs = require("fs");
const Discord = require('discord.js');
const main = require("./exports");
const express = require('express');
const app = require('express')();
const config = require("./configs/global.json");
const cmds = require('./configs/commands.json');
require("dotenv").config();
const crypto = require("crypto");
const got = require('got');

exports.botStart = function() { // will be run on bot "ready".

    if(fs.existsSync('./api') == false) {
        fs.mkdirSync('./api');
    }

    if (config.useapi == true){
        main.apiStart();
        return;
    }

  // ! BETA. 
  // unquote if on heroku
  // setInterval(function() {got(global.heroku)}, 300 * 1000)
  // every 300 seconds. (5 minutes)

}

exports.timestamp = function() {
	const dateOb = new Date();
	const hours = dateOb.getHours();
	const minutes = dateOb.getMinutes();
	const seconds = dateOb.getSeconds();
	return (main.date() + " " + hours + ":" + minutes + ":" + seconds);
};

exports.date = function() {
	const dateOb = new Date();
	const date = ("0" + dateOb.getDate()).slice(-2);
	const month = ("0" + (dateOb.getMonth() + 1)).slice(-2);
	const year = dateOb.getFullYear();
	return date + "-" + month + "-" + year;
};

exports.log = function(content) { // logs every thing to a log file
    // logging function
    try {
	fs.appendFileSync(`./logs/${main.date()}.txt`, `\n [${main.timestamp()}] ${content}`, error => {
		// logging function
		if (error) {
			console.error("Error on Logging: " + error);
			process.exit("LOG_ERROR");
		}
    });
    } catch {
        if (fs.existsSync('./logs')) {
            fs.writeFile(`./logs/${main.date()}.txt`,"log created", error => {
                // logging function
                if (error) {
                    console.error("Error on Logging: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return
        } else {
            fs.mkdirSync('./logs');
            fs.writeFile(`./logs/${main.date()}.txt`,"log created", error => {
                // logging function
                if (error) {
                    console.error("Error on Logging: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return
        }
    } 
	console.log(content)
	return;
};

exports.silent_log = function(content) {
    // logging function
    try {
	fs.appendFileSync(`./logs/${main.date()}.txt`, `\n [${main.timestamp()}] ${content}`, error => {
		// logging function
		if (error) {
			console.error("Error on Logging: " + error);
			process.exit("LOG_ERROR");
		}
    });
    } catch {
        if (fs.existsSync('./logs')) {
            fs.writeFile(`./logs/${main.date()}.txt`,"log created", error => {
                // logging function
                if (error) {
                    console.error("Error on Logging: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return
        } else {
            fs.mkdirSync('./logs');
            fs.writeFile(`./logs/${main.date()}.txt`,"log created", error => {
                // logging function
                if (error) {
                    console.error("Error on Logging: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return
        }
    }
	return;
};

exports.stats = function(content) {
    // logging function
    try {
	fs.appendFileSync(`./logs/stats/${main.date()}.txt`, `${content}`, error => {
		// logging function
		if (error) {
			console.error("Error on storing stats: " + error);
			process.exit("LOG_ERROR");
        }
        return;
    });
    } catch {
        if (fs.existsSync('./logs/stats')) {
            fs.writeFile(`./logs/stats/${main.date()}.txt`,"log created", error => {
                // logging function
                if (error) {
                    console.error("Error when storing stats: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return;
        } else {
            fs.mkdirSync('./logs/stats');
            fs.writeFile(`./logs/stats/${main.date()}.txt`,"stat file created", error => {
                // logging function
                if (error) {
                    console.error("Error on storing stats: " + error);
                    process.exit("LOG_ERROR");
                }
            });
            return;
        }
    }
	return;
};

exports.hash = function(content, type) {
    return crypto.createHash(type).update(content).digest("hex");
};

exports.check = function(folder){
    if (fs.existsSync(`./commands/${folder}`)){
        return true;
    } else {
        return false;
    }
};

exports.load = function (folder) {

    const index = require('./index')

    if (fs.existsSync(`./commands/${folder}`)) {
        fs.readdir(`./commands/${folder}`, (err, files) => {
        if(err) console.log(err);
      
        let jsfile = files.filter(f => f.split(".").pop() === "js");
      
        if(jsfile.length <= 0){
          console.log("[ERR] Couldn't find commands.");
          return;
        }
      
        jsfile.forEach((f, i) =>{
            let props = require(`./commands/${folder}/${f}`);
            index.loadCommand(props.help.name, props);
            props.help.aliases.forEach(alias => {
            index.loadAlias(alias, props.help.name);
            });
            console.log(`[BOT] ${folder}/${f} loaded!`);
        });
        })
    } else {
    console.log('tried to load ' + folder + ' but could not find it.')
    }
};

exports.apiStart = function() { // ? to add commands to the api and stuff look at the ./configs/commands.json
    
    app.use(express.static("./views/static", { extensions: "html"})); // static pages.
    // app.use(express.static("./commands", {extensions: "js"})); // ? see code online!

    app.get("/:command", function(req, res){ // command pages.
        var command = req.params.command;
        if (!cmds.hasOwnProperty(command)){
            res.send("404.");
            return;
        }
        var description = cmds[command].desc
        var layout = config.prefix + cmds[command].use
        res.render("command.ejs", {cmd: command, desc: description, use: layout});
    });

  try {
    app.listen(process.env.PORT || 9090)
  } catch (err) {
    console.log("[API] could start on specified port. error: " + err)
  }
  // ? SETUP AN ACCOUNT AT cron-job.org FOR KEEPING THE BOT ALIVE. or use the keep alive.

}