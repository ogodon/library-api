/**
 * User.js
 *
 * @description Users of the application
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    password: {
      type: 'string'
    },
    administrator: {
      type: 'boolean',
      defaultsTo: false
    }
  },

  beforeCreate: function(values, cb) {
    if(typeof values.password === 'undefined' || values.password.length < 8) {
      return cb('Please provide a password with at least 8 characters');
    }
    HashService.passwordHash(values.password, function(err, hash) {
      if(err) {
        return cb(err);
      }
      values.password = hash;
      return cb();
    });
  }
  
};
