module.exports = {
    name: 'kill',
    description: 'Kill someone.',
    aliases: ['attack'],
    args: true,
    usage: '<user>',
    execute(message, args) {
        const killedUser = message.mentions.users.first();
        if (!killedUser) return message.channel.send('Ping a user to kill them ;-;')
        if (killedUser.id === '750573070669840475') {
            message.channel.send('I am un-killable.')
        } else if (killedUser === message.author) {
            message.channel.send('You just killed yourself, Nice going.')
        } else {
            message.channel.send(`oof **${message.author.username}** killed <@${killedUser.id}>!`)
        }
    },
};
