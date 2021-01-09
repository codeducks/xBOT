const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
	const embed = new Discord.MessageEmbed();

	if(args[0] == "-h") {
		const embed = new Discord.MessageEmbed();
		embed.setColor('RANDOM');
		embed.setTitle(exports.help.name + " help.");
		embed.addField("layout:", config.prefix + exports.help.name + "", false);
		embed.addField("purpose:", "shows a cute picture from reddit", false);
		message.channel.send(embed);
		return;
	
	  }

	got('https://www.reddit.com/r/aww/random/.json')
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

			message.channel.send(embed);
		})
		.catch(console.error);
};
/* Want to add your own subreddits? Just replace the /r/aww in the URL
with your own subreddit (/r/entitledparents for example)
Be sure to update the name and description!
*/

module.exports.help = {
	name: "cute",
	aliases: ['aww']
};