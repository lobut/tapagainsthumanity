var express = require('express'),
  app = express(),
  http = require('http'),
  socketIO = require('socket.io'),
  authenticateUser = require('./libs/userManagement/authenticateUser'),
  server, io;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server = http.Server(app);
server.listen(5000);

io = socketIO(server);

io.on('connection', (socket) => {

  socket.on('user.login', (data) => {
    authenticateUser(socket, data);
  });

});