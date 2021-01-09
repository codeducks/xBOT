# CHANGELOG

## [v1.5.2](https://github.com/codeducks/xbot/releases/tag/v1.5.2) (unreleased)

+ static pages. (homepage)
+ better file names.

## [v1.5.1](https://github.com/codeducks/xbot/releases/tag/v1.5.1) (8/1/2021)

+ better api.

## [v1.5.0](https://github.com/codeducks/xbot/releases/tag/v1.5) (7/1/2021)

+ the index.js now has a very easy way to set default modules. (global.json)
+ the bot will have an API for people to get commands from active modules. (done in v1.5.1)

> suggestions are always welcome.

## [v1.4.2](https://github.com/codeducks/xBOT/releases/tag/v1.4) (3/1/2021)

+ added admin_readlogs.js sends logs to owner.
+ added reload command.. removes all modules.
+ keepAlive for heroku added.

## [v1.4.1](https://github.com/codeducks/xBOT/releases/tag/v1.4.1) (3/1/2021)

+ error fix

## [v1.4](https://github.com/codeducks/xBOT/releases/tag/v1.4) (3/1/2021)

+ this bot is now modular and modules can be loaded with ./bot load [module]
+ added directory check to exports for command loader.
+ changed global.json location.
+ added defaultmodulename to global.json for module loader.
+ fixed weird error when stopping bot.

## [v1.3.1](https://github.com/codeducks/xBOT/releases/tag/v1.3.1) (1/1/2021)

+ massive fix for massive error.
+ bot version now comes from package.json

## [v1.3](https://github.com/codeducks/xBOT/releases/tag/v1.3) (1/1/2021)

+ changed prefix to ./
+ added -h (help) to every command.
+ removed unnecessary dependencies.
+ added exports.js for logs etc.
+ added nuke command.
+ added hash command.
+ added logs to ./say and ./hash  
the logs for ./say is because then you can trace back any insulting say's, and hash for extending hash librarys.  

## [v1.2](https://github.com/codeducks/xBOT/releases/tag/v1.2) (31/12/2020)    
  
+ bug fixes.  
+ Deleted config.json and put the variables in .env
+ added CLIENTID in .env
+ added a dynamic invite link (thus the CLIENTID).
+ added admin_presence.js command.
+ added info_uptime.js command.
+ added admin_prefix.js command.

## [v1.1] (31/12/2020)

Was added to v1.2

## [v1.0.1](https://github.com/codeducks/xBOT/releases/tag/v1.0.1) (30/12/2020)    

+ Deleted config.json and put the variables in global.json
+ bug fixes.

## [v1.0](https://github.com/codeducks/xBOT/releases/tag/v1.0) (28/12/2020)
+ bug fixes.
+ heroku files.

## [v0.4](https://github.com/codeducks/xBOT/releases/tag/v0.4) (27/12/2020)
+ added aliases.
+ added an eval command.
+ added aliases to the exit command.
+ added a memes and cringe command.
+ changed numgen and coinflip to send message after if statement.

## [v0.3](https://github.com/codeducks/xBOT/releases/tag/v0.3) (11/12/2020)

+ added a max number for numgen.
+ added ban command.
+ added kick command.
+ added purge command.

## [v0.2](https://github.com/codeducks/xBOT/releases/tag/v0.2) (10/12/2020)

+ added UTC offset to time.
+ added global.json.
+ added randomized responses to time, coinflip and numgen.

## [v0.1](https://github.com/codeducks/xBOT/releases/tag/v0.1) (9/12/2020)

+ added the basics to the bot.
