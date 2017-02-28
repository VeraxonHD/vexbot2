exports.run = (client, message, args) => {
const params = message.content.split(" ").slice(1);
// get number of messages to prune
let messagecount = parseInt(params[0]);
// get the channel logs
message.channel.fetchMessages({limit: 100})
.then(messages => {
  let msg_array = messages.array();
  // filter the message to only your own
  msg_array = msg_array.filter(m => m.author.id === client.user.id);
  // limit to the requested number + 1 for the command message
  msg_array.length = messagecount + 1;
  // Has to delete messages individually. Cannot use `deleteMessages()` on selfbots.
  msg_array.map(m => m.delete().catch(console.error));
});}
