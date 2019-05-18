const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
  message.delete(1);
  if(message.member.id != "276337222196658178") return message.channel.send(":no_entry:  你沒有權限 詳細原因: 你不是作者");
  //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry:  你沒有權限");
  //if(!message.member.roles.find("name", "「副服主」co-owner") || !message.member.roles.find("name", "「服主」Owner ")){
  //message.reply(':no_entry: 你沒有權限')
      let say = args.join(" ");
      message.channel.send(say);
}
