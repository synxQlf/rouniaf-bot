const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Oh koi fdp');
});

client.on('message', message => {
    if (message.content === 'rouniaf') {
    	message.reply('tg ptn parle pas je joue');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
