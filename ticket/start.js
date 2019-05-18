const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
client.on("message", message => {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  if(command === '~ticket') {
    message.delete();
    message.guild.createChannel(`${message.author.users.username}`, 'text',
    [
      {
        id: `${message.author.id}`,
        allowed: ['SEND_MESSAGES', 'VIEW_CHANNEL']
      },
      {
        id: `498838295443275806`,
        denied: ['VIEW_CHANNEL', 'SEND_MESSAGES']
      }
    ]
  ).then(async m => {
  await m.setParent("526288177154097152");
});
}
});
