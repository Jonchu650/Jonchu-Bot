const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'execute',
    description: 'execute orders.',
    execute(message, args) {
        if (message.author.id === '715349857568817262' || message.author.id === '331009067403182081') {
            message.reply('What would you like to execute?');
            message.channel.awaitMessages(m => m.author.id == message.author.id,
                { max: 1, time: 30000 }).then(collected => {
                    if (collected.first().content.toLowerCase() == 'order') {
                        message.reply('What number order would you like to execute?');
                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                            { max: 1, time: 30000 }).then(collected => {
                                if (collected.first().content.toLowerCase() == '66') {
                                    message.reply('Copy that. Executing order 66.');
                                }
                            }).catch(() => {
                                message.reply('No answer after 30 seconds, operation canceled.');
                            });
                    }
                    else if (collected.first().content.toLowerCase() == 'gay') {
                        message.reply('I see, What kind of gay?');
                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                            { max: 1, time: 30000 }).then(collected => {
                                if (collected.first().content.toLowerCase() == 'big gay') {
                                    message.reply('Ah yes, big gay, What i expected from you sir.');
                                }
                            }).catch(() => {
                                message.reply('No answer after 30 seconds, operation canceled.')
                            });
                    }
                    else if (collected.first().content.toLowerCase() == 'mhix') {
                        message.reply('Ah yes, Mhix, Is there anything you\'d like to say to him?');
                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                            { max: 1, time: 30000 }).then(collected => {
                                switch (collected.first().content.toLowerCase()) {
                                    case 'cute':
                                        message.channel.send('<@331009067403182081> JONCHU CALLED YOU CUTE!')
                                        break;
                                    case 'adorable':
                                        message.channel.send('<@331009067403182081> JONCHU CALLED YOU ADORABLE!')
                                        break;
                                    case 'caring':
                                        message.channel.send('<@331009067403182081> JONCHU CALLED YOU CARING!')
                                        break;
                                    case 'awesome':
                                        message.channel.send('<@331009067403182081> JONCHU CALLED YOU AWESOME!')
                                        break;
                                    case 'loveable':
                                        message.channel.send('<@331009067403182081> JONCHU CALLED YOU LOVEABLE!')
                                        break;
                                }
                            }).catch(() => {
                                message.reply('No answer after 30 seconds, operation canceled.')
                            });
                    }
                    else if (collected.first().content.toLowerCase() == 'local') {
                        message.reply('Oh, i see, Local, Hes a weird one... Anything you\'d like to do to him?')
                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                            { max: 1, time: 30000 }).then(collected => {
                                if (collected.first().content.toLowerCase() == 'big gay') {
                                    message.reply(`I have given local the big gay. Anything else? If not simply type \`no\``);
                                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                                        { max: 1, time: 30000 }).then(collected => {
                                            if (collected.first().content.toLowerCase() == 'more gay') {
                                                message.reply('Umm ok i have given local more gay... Anything else? You can cancel this anytime by typing \`no\`');
                                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                    { max: 1, time: 30000 }).then(collected => {
                                                        if (collected.first().content.toLowerCase() == 'even more gay') {
                                                            message.channel.send('Wow umm i have given him EVEN MORE gay... A-anything e-else? To stop type `no`')
                                                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                                { max: 1, time: 30000 }).then(collected => {
                                                                    if (collected.first().content.toLowerCase() == 'more fucking gay') {
                                                                        message.reply('OK I HAVE GIVEN HIM MORE. I WILL NOW STOP.')
                                                                    }
                                                                });
                                                        } else {
                                                            message.reply('Canceled.')
                                                        }
                                                    });
                                            } else {
                                                message.reply('Canceled.')
                                            }
                                        }).catch(() => {
                                            message.reply('No answer after 30 seconds, operation canceled.')
                                        });
                                } else {
                                    message.reply('Canceled.')
                                }
                            }).catch(() => {
                                message.reply('No answer after 30 seconds, operation canceled.')
                            });
                    }
                });
        } else {
            message.channel.send('Only my owner can use this command!')
        }
    }
};