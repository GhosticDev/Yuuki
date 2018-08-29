const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    let embed = new Discord.RichEmbed()
      .setColor([154, 57, 63])
      .setAuthor("NO PERMISSION")
      .setDescription("You must have permission `MANAGE_MESSAGES` in order to use this command!")
      .setTimestamp();
    return message.channel.send(embed);
  }

  if (args.length === 0) {
    let embed = new Discord.RichEmbed()
      .setColor([154, 57, 63])
      .setAuthor("WRONG USE")
      .setDescription("Use: `y!clear <number of messages>` to clear the chat!")
      .setTimestamp();
    return message.channel.send(embed);
  }

  let amount = parseInt(args[0]);
  if (isNaN(amount)) {
    let embed = new Discord.RichEmbed()
      .setColor([154, 57, 63])
      .setAuthor("WRONG USE")
      .setDescription("Please, use a number as referral for messages to clear!")
      .setTimestamp();
    return message.channel.send(embed);
  }

  if (amount < 1 || amount > 100) {
    let embed = new Discord.RichEmbed()
      .setColor([154, 57, 63])
      .setAuthor("WRONG USE")
      .setDescription("Please, user a number between 1-100!")
      .setTimestamp();
    return message.channel.send(embed);
  }

  let embed = new Discord.RichEmbed()
    .setColor([54, 157, 63])
    .setAuthor("SUCCESSFUL")
    .setDescription(`Cleared **${amount}** messages.`)
    .setTimestamp();

  message.channel.bulkDelete(amount).then(() => {
    message.channel.send(embed).then(msg => msg.delete(5000));
  });

}
