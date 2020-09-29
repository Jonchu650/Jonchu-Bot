module.exports = {
    name: 'clear',
    description: 'Bulk delete messages.',
    args: true,
    usage: '<amount>',
    async execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send('You do not have the required permissions for this command!')
        }
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        }

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });
        await message.channel.send(`I have deleted ${amount - 1} messages!`)
            .then(msg => {
                msg.delete({ timeout: 3000 /*time unitl delete in milliseconds*/ });
            })
    },
};