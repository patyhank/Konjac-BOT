const Discord = require("discord.js");
var request = require('request');
module.exports.run = async (client, message, args) => {
      setTimeout(() => {
        var ign = args[1]
        var options = {
            url: 'https://api.mojang.com/profiles/minecraft',
            method: 'POST',
            json: ign
          };
          
          request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              console.log(body)
              if (!("name" in body)) {
                message.channel.send("ID 識別失敗");
                // more code
            } else {
                message.member.addRole('589106886398312448');
                message.member.removeRole('589375747433693194');
                message.member.setNickname(message.content);
            }
            }
          });
      }, 20);
};
