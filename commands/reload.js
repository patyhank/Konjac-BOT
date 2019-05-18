exports.run = (client, message, args) => {
  message.delete(1);
  if(message.member.id != "276337222196658178") return message.channel.send(":no_entry: 你不是作者");
  if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!client.commands.has(commandName)) {
    return message.channel.send("指令輸入錯誤");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.channel.send(`指令 ${commandName} 已重新載入`);
};
