module.exports = {
    name: 'slap',
    description: 'Slap!',
    args: true,
    usage: '<user>',
    aliases: ['smack'],
    execute(message, args) {
        const slappedUser = message.mentions.users.first();
        if (slappedUser.id === '750573070669840475') {
            message.channel.send('Bro. I may be a bot, But that hurts.')
        } else if (slappedUser === message.author) {
            message.channel.send('Damn, You just slapped yourself.')
        } else {
            message.channel.send(`Damn, **${message.author.username}** Slapped <@${slappedUser.id}>!`)
        }
    },
};