exports.run = (client, message, args) => {
  if(!args || args.size < 1) return message.channel.reply(`Must provide a command name to reload.`);
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.edit(`The command **${args[0]}** has been reloaded!`).catch(console.log);
  /*if (err === "MODULE_NOT_FOUND"){
    msg.edit("ERROR: Module does not exist")
  }*/
};
