const Discord = require('discord.js');
const bot = new Discord.Client()

const token = 'NjI4NTQ5NjEyMDk3MTEwMDIw.Xgz8Vw.UZ2OiR32NRrnLmCByzeZvXxOxrM';

bot.on('ready', () => {
console.log('Bot online');
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "general");
    if(!channel) return;

    channel.send(`${member} Welcome to our server onii-chan :heart:
    https://imgur.com/E8JBqKk`)
});

bot.login(token);