const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzExNjkwNDU2MzExOTIyNjg5.XsGsDw._UJ1jvTskihp-b5zqcZsnuThlQw'; // Token goes here.
 
client.login(token); // login the bot with your token.
 
client.on('message', message => { // Messages that trigger bot
 
    if(message.content.toLowerCase() === 'help')
        message.channel.send("Sorry, but can't help you right now " + message.author + "!");
    else if(message.content.toLowerCase().includes('time'))
    {
        var date = new Date();
        message.channel.send('The time is ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    }
    // etc...
 
 
});