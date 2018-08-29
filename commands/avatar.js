const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
	let user = message.mentions.users.first() || message.author;
	let embed = new Discord.RichEmbed()
		.setAuthor(`${user.username}'s avatar!`)
	  .setImage(user.displayAvatarURL)
		.setColor([54, 57, 64]);
 	message.channel.send(embed);

}
