const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
      message.delete();
      setTimeout(() => {
        var nick = message.member.displayName().split(/ +/g);
        console.log(nick)       
        var nick1 = message.member.nickname().split(/ +/g);
        console.log(nick1)     
      }, 20);
};
