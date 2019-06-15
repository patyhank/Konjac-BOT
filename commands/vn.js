const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
      message.delete();
      setTimeout(() => {
        var nick1 = message.member.nickname().split(/ +/g);
        console.log(nick1)     
      }, 20);
};
