const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    message.delete("1");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry:  你沒有權限");
    bot.channels.get('566218339769253898').send('~~－－－－－－－－－－－－－－－－－－－~~\n@《管理員》 @《官方人員》**簽到時刻**\n1. 請每日簽到\n2. 三日以上沒簽會扣50分\n3. 三日以上不在，要請假，密無名。\n4. 點選勾勾進行反應\n5. 昨天沒簽到可以補簽(限5天內)\n~~－－－－－－－－－－－－－－－－－－－~~')
    .then(message => {
      message.react(message.guild.emojis.get('520935053921091584'));
    });
}
