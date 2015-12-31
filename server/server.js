var express = require('express'),
  app = express(),
  http = require('http'),
  socketIO = require('socket.io'),
  authenticateUser = require('./libs/userManagement/authenticateUser'),
  createUser = require('./libs/userManagement/createUser'),
  userSetup = require('./libs/chat/setup'),
  server, io;

global.userSessions = {};

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

  socket.on('user.create', (data) => {
    createUser(socket, data, (socket) => {
      socket.emit('user.login.created')
    });
  });

  socket.on('amiloggedin', (data) => {
    if (userSessions[data.token] !== undefined) {
      socket.emit('user.get.success', {
        token: data.token
      });
    }
  });

});

userSetup(io);
