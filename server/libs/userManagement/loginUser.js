var crypto = require('crypto');

function loginUser(socket, user) {
  var token = crypto.randomBytes(64).toString('base64');

  userSessions[token] = user;

  return getUser(socket, token);
};

function getUser(socket, token) {
  if (!userSessions[token]) {
    return socket.emit('user.get.error', {
      message: 'This user is not authenticated'
    });
  }

  return socket.emit('user.get.success', {
    profile: userSessions[token],
    token: token
  })
};

module.exports = loginUser;
