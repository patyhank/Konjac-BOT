const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
      message.delete();
      setTimeout(() => {
        var nick1 = message.member.nickname()
        var nick0 = nick1.split(/ +/g);
        console.log(nick1)     
      }, 20);
};
