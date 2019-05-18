const Discord = require("discord.js");
const fs = require("fs");
const config = require('./config.json');
const Enmap = require("enmap");
const moment = require('moment');
const client = new Discord.Client();
const bot = new Discord.Client();
client.config = config;
bot.commands = new Discord.Collection();
moment.locale('zh_tw');
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
  // Here we load **commands** into memory, as a collection, so they're accessible
  // here and everywhere else.
  client.commands = new Enmap();
  fs.readdir("./test/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./test/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Attempting to load command ${commandName}`);
      client.commands.set(commandName, props);
    });
  });
client.login("NTI0OTIwODMyODI1MzYwMzg1.DvvGSw.eLju3VuhDdUwRARTuPkFQyoUh5g");
