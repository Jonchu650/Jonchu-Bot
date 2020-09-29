const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.commands = new Discord.Collection();
const Canvas = require('canvas');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
client.once('ready', () => {
	console.log(`${client.user.tag} Is now online.`); //says this when it goes back up

	client.user.setActivity(`Jonchu screaming... | ${prefix}help`, { type: 'LISTENING' })
		.then(presence => console.log(`Activity set to '${presence.activities[0].name}'`))
});
client.on('message', async message => {
	if (!db[message.author.id]) db[message.author.id] = {
		xp: 0,
		level: 0
	};
	db[message.author.id].xp++;
	let userInfo = db[message.author.id];
	if (userInfo.xp > 100) {
		userInfo.level++
		userInfo.xp = 0
		message.reply(`Congratulations, you leveled up to level ${userInfo.level}`)
	}
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (message.content.startsWith(`${prefix}rank`)) {
		let userInfo = db[message.author.id];
		let member = message.mentions.members.first();
		let embed = new Discord.MessageEmbed()
			.setColor(0x4286f4)
			.addField("Level", userInfo.level)
			.addField("XP", userInfo.xp + "/100");
		if (!member) return message.channel.send(embed)
		let memberInfo = db[member.id]
		let embed2 = new Discord.MessageEmbed()
			.setColor(0x4286f4)
			.addField("Level", memberInfo.level)
			.addField("XP", memberInfo.xp + "/100")
		message.channel.send(embed2)
		fs.writeFile("./database.json", JSON.stringify(db), (x) => {
			if (x) console.error(x)
		});
	}
	if (message.content.startsWith(`${prefix}gay`)) {
		const loluser = message.mentions.users.first() || message.author;
		const canvas = Canvas.createCanvas(200, 200);
		const ctx = canvas.getContext('2d');

		ctx.globalAlpha = 1.0;
		const avatar = await Canvas.loadImage(loluser.displayAvatarURL({ format: 'jpg' }));
		ctx.drawImage(avatar, 0, 0, 200, 200);
		ctx.globalAlpha = 0.6;
		const GAY = await Canvas.loadImage('./unknown.png');
		ctx.drawImage(GAY, 0, 0, 200, 200)

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'gayuser.png');

		message.channel.send(`Here is **${loluser.username}**'s gay image, Remember Jonchu is still working on it to make it look better!`, attachment)
	}

	const args = message.content.slice(prefix.length).trim().split(' ');
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command! Maybe try pinging someone if the command needs a pinged user!');
	}
});
client.login(process.env.TOKEN)