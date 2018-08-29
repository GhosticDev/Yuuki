const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor("BOT'S INVITE LINK", client.user.avatarURL)
    .setColor([179, 0, 134])
    .setDescription("Click [here](https://discordapp.com/oauth2/authorize?client_id=483781937526341663&scope=bot&permissions=8) to invite me, or join my server [here](https://discord.gg/nEs8uAZ)!")
    .setFooter("Invite Bot to your servers!", client.user.avatarURL)
    .setTimestamp();
  message.channel.send(embed);
}
