module.exports = {
    name: '8ball',
    description: '8ball!',
    args: true,
    usage: '<question>',
    execute(message, args) {
        var ballResponse = ["Yes.", "No.", "Definitely!", "Maybe.", "Idk.", "Totally.", "Definitely not."];

        var ballrandom = Math.floor(Math.random() * ballResponse.length);

        message.channel.send(ballResponse[ballrandom]);
    },
};