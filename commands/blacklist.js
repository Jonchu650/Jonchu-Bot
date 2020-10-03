const fs = require('fs');
module.exports = {
    name: 'blacklist',
    description: 'Blacklists a user from the bot',
    async execute(message, args) {
        if (message.author.id !== '715349857568817262') return;
        const blacklistedUser = message.mentions.users.first();
        if (!args[0]) return message.channel.send('You did not mention a user.');
        if (!blacklistedUser) return message.channel.send('That user does not exist.');
        if (blacklistedUser.bot) return message.channel.send('Dont blacklist a bot lol...');
        const blackListObject = {
            userTag: message.author.tag
        };
        let blacklist = await JSON.parse(fs.readFileSync('../Jonchu Bot/blacklist.json', "utf-8"));
        if (!blacklist) return console.log("Issue parsing blacklist.json")
        if (!blacklist[blacklistedUser.id]) blacklist[blacklistedUser.id] = blackListObject;
        
        try {
            await fs.writeFile('../Jonchu Bot/blacklist.json', JSON.stringify(blacklist, null, 2), (err) => {
                if (err) {
                    return console.log(err);
                } else {
                    console.log("Successfully blacklisted " + blacklistedUser.tag);
                }
            });
        } catch (err) {
            console.log(err);
            message.channel.send("Error Blacklisting user.")
        }
    }
}