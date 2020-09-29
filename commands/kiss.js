module.exports = {
    name: 'kiss',
    description: 'Smooch!',
    aliases: ['smooch'],
    args: true,
    usage: '<user>',
    execute(message, args) {
        const smoochedUser = message.mentions.users.first();
        if (smoochedUser.id === '750573070669840475') {
            message.channel.send(':flushed:')
        } else if (smoochedUser === message.author) {
            message.channel.send('You cant smooch yourself.')
        } else {
            message.channel.send(`awww **${message.author.username}** smooched <@${smoochedUser.id}>!`)
        }
    },
};