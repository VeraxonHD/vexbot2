exports.run = (client, message, args) => {
  var messageid = args[0]
  var guild = message.guild
  const Discord = require("discord.js");
  message.channel.fetchMessages({
      around: messageid,
      limit: 1
    })
    .then((quote) => {
      var guildmember = guild.members.get(quote.first().author.id).nickname ? guild.members.get(quote.first().author.id).nickname : quote.first().author.username
      var embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setAuthor(`${guildmember} (AKA ${quote.first().author.username}#${quote.first().author.discriminator})`)
        .setDescription(quote.first().content)
        .setTimestamp(quote.first().createdAt);
      message.delete()
      message.channel.sendEmbed(
        embed, {
          disableEveryone: true
        }
      )
      .catch(console.log);
    })
};
