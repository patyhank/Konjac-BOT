const Discord = require("discord.js");
const fs = require("fs");
const Enmap = require("enmap");
const moment = require('moment');
const client = new Discord.Client();
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
var schedule = require('node-schedule');


moment.locale('zh_tw');
client.aliases = new Enmap();
client.commands = new Enmap();
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
client.commands = new Enmap();
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
client.commands = new Enmap();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});
client.on('message', message => {
  // If the message is "ping"
  var date = new Date().setHours(20, 40, 0, 0);
  new Date() > date && wwww();
  var wwww = client.channels.get('566218339769253898').send('~~－－－－－－－－－－－－－－－－－－－~~\n@《管理員》 @《官方人員》**簽到時刻**\n1. 請每日簽到\n2. 三日以上沒簽會扣50分\n3. 三日以上不在，要請假，密無名。\n4. 點選勾勾進行反應\n5. 昨天沒簽到可以補簽(限5天內)\n~~－－－－－－－－－－－－－－－－－－－~~')
    .then(msg => {
      msg.react(message.guild.emojis.get('520935053921091584'))
    });
});


// Prefix
/*client.on("message", message => {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  if(command === '~bot') {
    message.delete();
    message.guild.createChannel("BOT製作要求-" + `${message.author.username}` + "-" + `${message.author.discriminator}`, 'text',
    [
      {
        id: `${message.author.id}`,
        allowed: ['SEND_MESSAGES', 'VIEW_CHANNEL']
      },
      {
        id: `523442708300431372`,
        denied: ['VIEW_CHANNEL', 'SEND_MESSAGES']
      }
    ]
  ).then(async m => {
  await m.setParent("528547043241885696");
});
let channel = message.guild.channels.find('id', '528546251768332336');
const open = new Discord.RichEmbed()
.setColor('GREEN')
.addField("開啟幫助", `${message.author.tag} 已開啟幫助頻道`)
channel.send(open);
}
});
client.on("message", message => {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  if(command === '~done') {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry:  你沒有權限");
  if(message.channel.parentID != "528547043241885696") return message.channel.send(":no_entry:  無法 刪除 此頻道");
    message.delete();
    message.channel.delete('完成');
    let channel = message.guild.channels.find('id', '528546251768332336');
    const close = new Discord.RichEmbed()
    .setColor('GREEN')
    .addField("幫助關閉", `${message.channel.name} 已被標記為 **完成**`)
    .addField("若還需要伺服器BOT", `請使用~bot`)
    channel.send(close);
}
});*/
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '~GuildOwner') {
    // Send "pong" to the same channel
    const owner = message.guild.owner.user.username
    const ownerdisc = message.guild.owner.user.discriminator
    const ownernick = message.guild.owner.nickname
    const ownerjoin = moment(message.guild.owner.joinedTimestamp).format('YYYY MMMM Do , h:mm:ss a');
    message.channel.send(`Owner Tag: ${owner}#${ownerdisc} Owner Nick: ${ownernick} Owner joinedAt: ${ownerjoin}`);
    message.channel.send(`伺服主Tag: ${owner}#${ownerdisc} 伺服主暱稱: ${ownernick} 伺服主加入於: ${ownerjoin}`);
    const guild = client.guilds.get('313613999029747712');
    console.log(guild);
  }
});
client.on('guildMemberAdd', (guildMember) => {
  guildMember.addRole('578874211708436491');
});
client.login(process.env.token);
