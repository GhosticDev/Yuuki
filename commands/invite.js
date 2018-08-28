const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor("BOT'S INVITE LINK", client.user.avatarURL)
    .setColor([179, 0, 134])
    .setDescription("Click [here](https://discordapp.com/oauth2/authorize?client_id=476735118233305088&scope=bot&permissions=2146958847) to invite me, or join my server [here](https://discord.gg/wNJGgxa)!")
    .setFooter("Invite Bot to your servers!", client.user.avatarURL)
    .setTimestamp();
  message.channel.send(embed);
}