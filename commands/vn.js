const Discord = require("discord.js");
const mine
var request = require('request');
module.exports.run = async (client, message, args) => {
      message.delete();
      setTimeout(() => {
        var ign = args[0]
        var options = {
            uri: 'https://api.mojang.com/profiles/minecraft',
            method: 'POST',
            json: [`${ign}`]
          };
          
          request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              console.log(body)
              if(body.hasOwnProperty("name")){
              message.member.addRole('589106886398312448')
              message.member.removeRole('589375747433693194')
              message.member.setNickname(message.content)
            }
            }
          });
      }, 20);
};