const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.delete("1");
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry:  你沒有權限");
  let vote = args.join(" ");
  let channel = message.guild.channels.find(channel => channel.name === '投票');
  if (message.guild.id = "543993456310222877") return true;
  let channel = message.guild.channels.find(channel => channel.id === '585031577944457216');
  const vo = new Discord.RichEmbed()
    .setColor('GREEN')
    .addField("投票:", `${vote}`);
  channel.send(vo)
    .then(msg => {
      msg.react('✅')
      msg.react('❎')
    });
}
