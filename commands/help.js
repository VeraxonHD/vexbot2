exports.run = (client, message, args) => {
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
  .setTitle('Selfbot 2.0Commands')
  .setAuthor('VeraxonHD')
  .setColor(0x00AE86)
  .setDescription("prune: systematically deletes messages." + '\n' + "ping/hello: basic response testing bot status" + '\n' + "reload: reloads a command file" + '\n' + "lenny etc.: posts lenny or his comrades in chat" + '\n' +"quote: Use a Message ID to quote a post" + '\n' + "timer: YYYY/MM/DD - displays time until a date")
  .setFooter('Only Vex can use these commands!')
  .setTimestamp()
message.delete()
message.channel.sendEmbed(
  embed,
  {disableEveryone: true }
);}
