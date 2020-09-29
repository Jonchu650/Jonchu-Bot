module.exports = {
    name: 'snuggle',
    description: 'Snuggles!',
    args: true,
    usage: '<user>',
    execute(message, args) {
        const snuggleduser = message.mentions.users.first();
        if (!snuggleduser) return message.channel.send('Ping a user to snuggle them!')
        if (snuggleduser.id === '750573070669840475') {
            message.channel.send(':flushed:')
        } else if (snuggleduser === message.author) {
            message.channel.send('Rip. Ya snuggled yourself.')
        } else {
            message.channel.send(`awww **${message.author.username}** snuggled <@${snuggleduser.id}>!`)
        }
    },
};
