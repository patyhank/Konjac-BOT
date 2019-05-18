const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
      message.delete();
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry:  你沒有權限");
    //if(!message.member.roles.find("name", "「副服主」co-owner") || !message.member.roles.find("name", "「服主」Owner ")){
    //message.reply(':no_entry: 你沒有權限')
        let announcement = args.join(" ");
        let channel = message.guild.channels.find('id', '531757222058000394');
        const ann = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle("Discord 群組更新!!!")
        .addField("更新!!!", `${announcement}`)
    message.channel.send(ann);
};
