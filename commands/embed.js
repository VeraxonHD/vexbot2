exports.run = (client, message, args) => {
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
.setAuthor("VeraxonHD")
.setDescription(args.join(" "))
.setColor(message.guild.member(client.user).highestRole.color)
message.delete()
message.channel.sendEmbed(
  embed,
  {disableEveryone: true }
);
}
