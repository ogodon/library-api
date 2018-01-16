/**
 * jwtAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user with a correct json web token
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  var token;
  if(req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');
    if(parts.length == 2) {
      var scheme = parts[0],
        credentials = parts[1];
      if(/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return res.json(401, { err: { status: 'danger', message: res.i18n('auth.policy.wrongFormat') } });
    }
  }
  else {
    return res.json(401, { err: { status: 'danger', message: res.i18n('auth.policy.noAuthorizationHeaderFound') } });
  }

  JwtService.verifyToken(token, function(err, decodedToken) {
    if(err) {
      return res.json(401, { err: { status: 'danger', message: res.i18n('auth.policy.invalidToken'), detail: err } });
    } 
    req.token = decodedToken.sub;
    next();
  });

};
