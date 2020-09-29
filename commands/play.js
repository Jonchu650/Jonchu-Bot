const ytdl = require('ytdl-core');
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'play',
    description: 'dope',
    execute(message, args) {
        if (message.channel.type === 'dm') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=8ybW48rKBME', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voiceChannel.leave());
		});
    },
};