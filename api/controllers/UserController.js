/**
 * UserController
 *
 * @description Users
 */

var validator = require('validator');

module.exports = {

  signin: function(req, res) {
    var errorMessage = 'Email/Password matching not found';
    User.findOne({ email: req.param('email') }).exec(function(err, user) {
      if(err || !user) {
        return res.notFound(errorMessage);
      }
      HashService.comparePasswordHash(req.param('password'), user.password, function(err, result) {
        if(err || !result) {
          return res.notFound(errorMessage);
        }
        var payload = {
          id: user.id,
          email: user.email,
          adm: user.administrator
        };
        var token = JwtService.issueToken(payload);
        return res.ok({ token: token });
      });
    });
  },

  signup: function(req, res) {
    if(!validator.isEmail(req.param('email'))) {
      return res.badRequest('Email cannot be empty');
    }
    if(req.param('password').trim().length < 8) {
      return res.badRequest('Password must have at least 8 characters');
    }
    User.create({
      email: req.param('email'),
      password: req.param('password')
    }).exec(function(err, user) {
      if(err) {
        return res.badRequest('Email already exists');
      }
      var payload = {
        id: user.id,
        email: user.email,
        adm: user.administrator
      };
      var token = JwtService.issueToken(payload);
      return res.ok({ token: token }); 
    });
  }
  
};
