const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.author;

  let hug = ["https://i.imgur.com/Ozz7s5O.gif", "https://i.imgur.com/ahsOvVU.gif", "https://i.imgur.com/0CtHP6f.gif",
            "https://i.imgur.com/zZpkQUm.gif", "https://i.imgur.com/L5x46hH.gif", "https://i.imgur.com/oTsG1tr.gif",
            "https://i.imgur.com/e455tOE.gif", "https://i.imgur.com/1qVpbTl.gif", "https://i.imgur.com/eAyIzST.gif",
            "https://i.imgur.com/mqt8prK.gif", "https://i.imgur.com/ZV4H6u8.gif", "https://i.imgur.com/cyWesRe.gif",
            "https://i.imgur.com/JNJpIa9.gif", "https://i.imgur.com/SOKt9M2.gif", "https://i.imgur.com/jS680Jg.gif",
            "https://i.imgur.com/7dxczYH.gif", "https://i.imgur.com/QOgjojG.gif", "https://i.imgur.com/Sd8ZCVr.gif",
            "https://i.imgur.com/T6cY84X.gif", "https://i.imgur.com/PVQBh2h.gif", "https://i.imgur.com/fbGm5So.gif"];

  let random = hug[Math.floor(Math.random() * hug.length)];

  if (args.length === 0) {
    let emb = new Discord.RichEmbed()
      .setColor([6, 71, 205])
      .setDescription("**" + client.user.username + "** hugged **" + user.username + "**!")
      .setImage(random)
      .setTimestamp();
    return message.channel.send(emb);
  }

  let name = args[0];
  try {
    let mention = message.mentions.users.first();
    name = mention.username;
  } catch(e) {
  }

  let embed = new Discord.RichEmbed()
    .setColor([6, 71, 205])
    .setDescription("**" + user.username + "** hugged **" + name + "**!")
    .setImage(random)
    .setTimestamp();
  message.channel.send(embed);
}
