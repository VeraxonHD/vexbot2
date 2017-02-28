exports.run = (client, message, args) => {
  var gamename = args[0]
  const Discord = require("discord.js");
  var user = new Discord.User();

  client.user.setgame(gamename)
  message.edit(`Game Name set to ${gamename}`)
}
