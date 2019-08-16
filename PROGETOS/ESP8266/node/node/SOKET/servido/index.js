var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	 socket.on('EnviarArduino', function(msg){
    io.emit(msg.user , msg.comando);
    console.log(msg.user);
    console.log(msg.comando);
  }).on('EnviarCliente', function(msg){
    io.emit(msg.user , msg.comando);
    console.log(msg.user);
    console.log(msg.comando);
  });
});