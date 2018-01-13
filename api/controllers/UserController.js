/**
 * UserController
 *
 * @description Users
 */

module.exports = {
  signin: function(req, res) {
    var errorMessage = 'Email/Password matching not found';
    User.findOne({ email: req.param('email') }).exec(function(err, user) {
      if(err) {
        return res.notFound(errorMessage);
      }
      HashService.comparePasswordHash(req.param('password'), user.password, function(err, res) {
        if(err || !res) {
          return res.notFound(errorMessage);
        }
        req.session.authenticated = true;
        delete user.password;
        req.session.user = user;
        return res.ok(user);
      });
    });
  },

  signout: function(req, res) {
    req.session.authenticated = false;
    if(typeof req.session.user !== 'undefined') {
      delete req.session.user;
    }
    return res.ok({});
  },

  whoami: function(req, res) {
    if(req.session.authenticated) {
      return res.ok(req.session.user);
    }
    return res.ok({});
  }
};
