module.exports = {
    name: 'lick',
    description: 'Lick a user ig',
    args: true,
    usage: '<user>',
    execute(message, args) {
        const lickeduser = message.mentions.users.first();

        message.channel.send(`awwww **${message.author.username}** Just licked ${lickeduser}!`);
    },
};