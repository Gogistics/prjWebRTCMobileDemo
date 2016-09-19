/**/
var socket = require('socket.io-client')('http://45.79.106.150:8000');
socket.on('connect', function(){
  console.log('Socket Connected');
  socket.on('text', function(text) {
    console.log(text);
  });
});
socket.on('event', function(data){});
socket.on('disconnect', function(){});
