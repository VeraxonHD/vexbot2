exports.run = (client, message, args) => {
    message.edit("pong!").catch(console.error);
}
