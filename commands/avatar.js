const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'A test command for the command handler.',
    args: true,
    usage: '<user>',
    aliases: ['icon', 'pfp'],
    execute(message, args) {
        const avataruser = message.mentions.users.first() || message.author;

        const avatarembed = new Discord.MessageEmbed()
            .setTitle(`${avataruser.tag}`)
            .setColor('00ccdb')
            .setImage(avataruser.displayAvatarURL({ format: 'png', dynamic: true, size: 256 }))
        message.channel.send(avatarembed)
    },
};