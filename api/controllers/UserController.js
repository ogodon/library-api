/**
 * UserController
 *
 * @description Users
 */

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
  }
  
};
