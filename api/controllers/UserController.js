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
        return res.ok(errorMessage);
      }
      HashService.comparePasswordHash(req.param('password'), user.password, function(err, result) {
        if(err || !result) {
          return res.notFound(errorMessage);
        }
        delete user.password;
        var token = JwtService.issueToken(user);
        return res.ok({ token: token });
      });
    });
  }
  
};
