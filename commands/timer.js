exports.run = (client, message, args) => {
var deadline = args[0];
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

message.edit("Time remaining until `" + deadline + "`:`" + getTimeRemaining(deadline).days + " days, " + getTimeRemaining(deadline).hours + " hours, " + getTimeRemaining(deadline).minutes + " minutes, " + getTimeRemaining(deadline).seconds + " seconds.`")
}
