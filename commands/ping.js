module.exports = {
	name: 'ping',
	description: 'Checking my bots super fucking high ping!',
	execute(message, args) {
		if (message.author.id === "715349857568817262") {
			message.channel.send('Obtaining ping...').then(msg => {
				const ping = msg.createdTimestamp - message.createdTimestamp;
				msg.edit(`Pong! **${ping}ms**`);
			})
		}
	}
}