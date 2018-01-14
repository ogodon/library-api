/**
 * User.js
 *
 * @description Users of the application
 */
 
var bcrypt = require('bcrypt');

module.exports = {
    
  passwordHash: function(password, cb) {
    bcrypt.hash(password, 8, function(err, hash) {
      return cb(err, hash);
    });
  },

  comparePasswordHash: function(password, hash, cb) {
    bcrypt.compare(password, hash, function(err, res) {
      return cb(err, res);
    });
  }

};
