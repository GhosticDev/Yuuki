const Discord = require('discord.js');
const config = require("./config.json");
const utils = require("./utils.js");

const client = new Discord.Client();
client.prefix = config.prefix;

client.on("ready", () => {
	let users = 0;
	for (let g of client.guilds.array()) {
		users += g.memberCount;
	}
	console.log("Bot on with " + client.users.size + " users and " + client.guilds.size + " servers!");
	client.user.setActivity(`${client.users.size} users!`, {type: 'Watching'});
	client.user.setActivity(`${users} users! y!help`, {type: 'Watching'});
		client.channels.get('483785943292051474').edit({
		name: `Servers: ${client.guilds.size}`
	}).then(console.log("'Servers' voice channel updated!")).catch(console.log);
});

client.on("message", async message => {
  let msg = message.content.toLowerCase();
	if (message.author.bot) return undefined;
  let user = message.author;

	if (message.content.indexOf(config.prefix) !== 0) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

  try {
    let commands = require(`./commands/${command}.js`);
    commands.run(client, message, args);
  } catch (e) {
    utils.error(client, e, message.author.username);
  } finally {
  }

});

client.on('guildCreate', async guild => {
  client.channels.get('476506396544729088').send(`New server: **${guild.name}** (Owner: ${guild.owner.user.username})(Members: ${guild.memberCount})`);
  let users = 0;
  for (let g of client.guilds.array()) {
    users += g.memberCount;
  }
  client.user.setActivity(`${users} users! md!help`, {type: 'Watching'});
  let msg = "Thank you for adding me! :white_check_mark:\n- My prefix here is \`md!\`\n- You can see a list of commands by typing \`md!help\`\n- You can change my prefix with \`md!settings prefix\`\n- If you need help, feel free to join our support server at https://discord.gg/xrqhcA5";
  guild.channels.filter(c => c.type === 'text').first().send(msg);
  client.channels.get('483785943292051474').edit({
    name: `Servers: ${client.guilds.size}`
  }).then(console.log).catch(console.log);
});

client.on('guildDelete', async guild => {
  client.channels.get('476506410159702026').send(`Bye server: **${guild.name}**`);
  let users = 0;
  for (let g of client.guilds.array()) {
    users += g.memberCount;
  }
  client.user.setActivity(`${users} users! md!help`, {type: 'Watching'});
  client.channels.get('483785943292051474').edit({
    name: `Servers: ${client.guilds.size}`
  }).then(console.log).catch(console.log);
});

client.login(process.env.TOKEN);
