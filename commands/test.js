const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'test',
	description: 'A test command for the command handler.',
	cooldown: 5,
	execute(message, args) {
		message.channel.send(`Testing is good.`);
	},
};