var User = require('./userModel'),
  sha512 = require('sha512');

module.exports = function authenticateUser (socket, data) {
  data.password = sha512(data.password);

  User.findOne(data, null, function execute(err, data) {
    if (data) {
      return loginUser(socket, data);
    } else {
      return socket.emit('user.login.error', err || {
        message: "Invalid email or password.'"
      });
    }
  });
};
