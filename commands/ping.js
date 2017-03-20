exports.run = (client, message, args) => {

  var start = new Date().getTime();
    message.edit("Pong!").catch(console.error)
  var time = (new Date().getTime() - start)// / 1

  message.edit("Pong! Time taken: `" + time + "ms`")

}
