const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
      message.delete();
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry:  你沒有權限");
    //if(!message.member.roles.find("name", "「副服主」co-owner") || !message.member.roles.find("name", "「服主」Owner ")){
    //message.reply(':no_entry: 你沒有權限')
        let ani = args.join(" ");
        let channel = message.guild.channels.find('id', '579294730123214858');
        const aninewbangumi = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle("動畫瘋新番!!!")
        .addField("更新!!!", `${ani}`)
    message.channel.send(aninewbangumi).catch;
};
