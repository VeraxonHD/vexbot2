exports.run = (client, message, args) => {
  var messageid = args[0]
  const Discord = require("discord.js");
  message.channel.fetchMessages({
      around: messageid,
      limit: 1
    })
    .then((quote) => {
      var embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setAuthor(quote.first().author.username)
        .setDescription(quote.first().content)
        .setTimestamp(quote.first().createdAt);

      message.channel.sendEmbed(
        embed, {
          disableEveryone: true
        }
      )
      .catch(console.log);
    })
};
