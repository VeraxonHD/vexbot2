exports.run = (client, message, args) => {

  var start = new Date().getTime();
    message.edit("pong!").catch(console.error)
  var time = (new Date().getTime() - start)// / 1

  message.edit("Pong! Time taken: `" + time + "ms`")
  
}
