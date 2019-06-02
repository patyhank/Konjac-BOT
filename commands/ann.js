const Discord = require("discord.js");
const moment = require("moment")
moment.locale("zh-tw");
module.exports.run = async (client, message, args) => {
    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry:  你沒有權限");
    //if(!message.member.roles.find("name", "「副服主」co-owner") || !message.member.roles.find("name", "「服主」Owner ")){
    //message.reply(':no_entry: 你沒有權限')
    var momenttime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    let ann = args.join(" ");
    let channel = message.guild.channels.find('name', '公告');
    const aninewbangumi = new Discord.RichEmbed()
        .setColor('GREEN')
        .addField("公告!!!", `${ann}`)
        .setFooter(momenttime)
    channel.send("@everyone", aninewbangumi).catch;
};
