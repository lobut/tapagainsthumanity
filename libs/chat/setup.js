var socketIO = require('socket.io');

function initialise(io) {
  var group = io.of('/hallway');

  group.on('connection', (socket) => {
    socket.on('message.send', (data) => {
      var session = userSessions[data.token];

      console.log('trying to receive message with:' + JSON.stringify(data));

      if (session === undefined)
      {
        socket.emit('chatroom.unauthorized', {
          message: 'unauthorized user'
        });
        return;
      }

      data['username'] = session.email;

      console.log('received message with:' + JSON.stringify(data));
      group.emit('message.sent', data); 
    });
  })

}

module.exports = initialise;
