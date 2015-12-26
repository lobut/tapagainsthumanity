var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/pressagainsthumanity');

var userSchema = db.Schema({
  firstname: String,
  lastname: String,
  password: { type: String, select: false },
  email: String
});

module.exports = db.model('User', userSchema);
