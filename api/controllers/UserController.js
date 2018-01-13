/**
 * UserController
 *
 * @description Users
 */

module.exports = {
  signin: function(req, res) {
    var email = req.param('email');
    var password = req.param('password');
    HashService.passwordHash(password, function(err, passwordHash) {
      User.findOne({ email: email, password: passwordHash }).exec(function(err, user) {
        if(err) {
          return res.notFound('Email/Password not found');
        }
        req.session.authenticated = true;
        delete user.password;
        req.session.user = user;
        res.ok(user);
      });
    });
  },

  signout: function(req, res) {
    req.session.authenticated = false;
    if(req.session.user !== 'undefined') {
      delete req.session.user;
    }
    return res.ok({});
  },

  whoami: function(req, res) {
    if(typeof req.session.authenticated !== undefined && req.session.authenticated) {
      return res.ok(req.session.user);
    }
    return res.ok({});
  }
};
