module.exports = {
	name: 'shutdown',
	description: 'shutting down my bot.',
	execute(message, args) {
		if (message.author.id === '715349857568817262') {
			process.exit()
		} else {
			message.reply('You cannot shut me down.')
		}
	},
};