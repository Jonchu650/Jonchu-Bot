module.exports = {
    name: 'hug',
    description: 'Hugs!',
    args: true,
    usage: '<user>',
    execute(message, args) {
        const huggedUser = message.mentions.users.first();
        if (!huggedUser) return message.channel.send('Ping a user to hug them!')
        if (huggedUser.id === '750573070669840475') {
            message.channel.send(':flushed:')
        } else if (huggedUser === message.author) {
            message.channel.send('oof U just hugged yourself, feels bad man')
        } else {
            message.channel.send(`awww **${message.author.username}** Hugged <@${huggedUser.id}>!`)
        }
    },
};
