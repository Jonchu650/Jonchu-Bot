module.exports = {
    name: 'say',
    description: 'Make me say stuff!',
    args: true,
    usage: '<message>',
    execute(message, args) {
        const MSG = message.content.split(`+say `).join("")
        message.channel.send(MSG)
        message.delete()
    },
};