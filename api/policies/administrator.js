/**
 * jwtAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user with a correct json web token
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  if(!req.token.adm) {
    return res.json(401, { err: { status: 'danger', message: res.i18n('auth.policy.notAdministrator') } });
  }
  next();

};
