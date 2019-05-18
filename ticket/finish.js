const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
client.on("message", message => {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  if(command === '~done') {
    message.delete();
    message.guild.channels.delete(`${message.Mentions.users.username}`);
}
});
