var sha512 = require('sha512'),
  User = require('./userModel'),
  loginUser = require('./loginUser');

module.exports = function createUser(socket, data) {

  data.password = sha512(data.password);

  var user = new User(data);

  user.save().then((data) => {
    return loginUser(socket, data);
  });

};
