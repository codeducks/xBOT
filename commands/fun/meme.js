const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
	const embed = new Discord.MessageEmbed();

	if(args[0] == "-h") {
		const embed = new Discord.MessageEmbed();
		embed.setColor('RANDOM');
		embed.setTitle(exports.help.name + " help.");
		embed.addField("layout:", config.prefix + exports.help.name + "", false);
		embed.addField("purpose:", "shows a meme from reddit.", false);
		message.channel.send(embed);
		return;
	
	  }

	got('https://www.reddit.com/r/memes/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('RANDOM');
			embed.setImage(memeImage);
			embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
			embed.setTimestamp();

			message.channel.send(embed);
		})
		.catch(console.error);
};

module.exports.help = {
	name: "meme",
	aliases: ['funny']
};