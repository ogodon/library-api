/**
 * JwtService.js
 *
 * @description JWT service
 */

var jwt = require('jsonwebtoken');

module.exports = {
  
  issueToken: function(payload) {
    var token = jwt.sign(payload, sails.config.jwt.token_secret);
    return token;
  },

  verifyToken: function(token, callback) {
    return jwt.verify(token, sails.config.jwt.token_secret, {}, callback);
  }

};
