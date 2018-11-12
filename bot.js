const commando = require('discord.js-commando');
const  bot = new commando.Client();

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('team', 'Team');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


global.servers = {};

bot.on('message', function(menssage){
    if(menssage.content == 'Aiden you are gay')
    {
        menssage.reply('https://cdn.discordapp.com/attachments/505136005037162513/509197197691322368/image0.png https://cdn.discordapp.com/attachments/505136005037162513/509197198257422336/image1.png');
    }
});

bot.on('message', function(menssage){
    if(menssage.content == 'Splatoonman you suck at coding')
    {
        menssage.reply('BITCH THIS IS WHAT I DO! YOU CANT DO THIS SHIT SHUT THE FUCK UP https://cdn.discordapp.com/attachments/484833682037932042/510878332355870720/v1122s.PNG');
    }
});

bot.on('message', function(menssage){
    if(menssage.content == 'bitch lasagna')
    {
        menssage.reply('bitch lasagna');
    }
});

bot.on('message', function(menssage){
    if(menssage.content == 'Ladies and Gentlemen')
    {
        menssage.reply('We got him');
    }
});

bot.on('message', function(menssage){
    if(menssage.content == 'Tik')
    {
        menssage.reply('Tok');
    }
});

bot.on('message', function(menssage){
    if(menssage.content == 'Meme')
    {
        menssage.reply(':clap: :clap: Meme Review');
    }
});

bot.on('message', function(menssage){
    if(menssage.content == 'meme')
    {
        menssage.reply(':clap: :clap: Meme Review');
    }
});

bot.on('message', function(menssage){
    if(menssage.content == 'Random you like BrittzStudio_')
    {
        menssage.reply('https://cdn.discordapp.com/attachments/505136005037162513/510981248865271818/image0.jpg');
    }
});

bot.on('ready',function(){
    console.log("The bot is ready and it's online on the SplattyCraft Discord.");
})

client.login(process.env.BOT_TOKEN);
