const Canvas = require('canvas');
module.exports = {
    name: 'gay',
    description: 'Make someones pfp or your own have a rainbow flag!',
    usage: '[user]',
    execute(message, args) {
        const loluser = message.mentions.users.first() || message.author;
		const canvas = Canvas.createCanvas(200, 200);
		const ctx = canvas.getContext('2d');

		ctx.globalAlpha = 1.0;
		const avatar = await Canvas.loadImage(loluser.displayAvatarURL({ format: 'jpg' }));
		ctx.drawImage(avatar, 0, 0, 200, 200);
		ctx.globalAlpha = 0.6;
		const GAY = await Canvas.loadImage('../Jonchu Bot/unknown.png');
		ctx.drawImage(GAY, 0, 0, 200, 200)

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'gayuser.png');

		message.channel.send(`Here is **${loluser.username}**'s gay image, Remember Jonchu is still working on it to make it look better!`, attachment)
    }
}