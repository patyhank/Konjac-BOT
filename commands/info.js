const Discord = module.require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
  let member = message.mentions.members.first() || message.member, user = member.user;
    const joinDiscord = moment(bot.createdAt).format('llll');
    const joinServer = moment(bot.joinedAt).format('llll');
    const ownerjoin = moment(member.user.createdTimestamp).format('YYYY MMMM Do , h:mm:ss a');
    message.delete()
    let embed = new Discord.RichEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setDescription(`${user}`)
        .setColor(`GREEN`)
        .setThumbnail(`${user.displayAvatarURL}`)
        .addField('Status:', user.presence.status)
        .addField("CreatedAt:", `${ownerjoin}`, true)
        .setTimestamp();

    message.channel.send({ embed: embed });
    return;
}

module.exports.help = {
    name: 'info'
}
