/**
 * 403 (Forbidden) Handler
 *
 * Usage:
 * return res.forbidden();
 * return res.forbidden(err);
 * return res.forbidden(err, 'some/specific/forbidden/view');
 *
 * e.g.:
 * ```
 * return res.forbidden('Access denied.');
 * ```
 */

module.exports = function forbidden (data, options) {

  var req = this.req;
  var res = this.res;
  var sails = req._sails;
  res.status(403);
  return res.json({
    code: 403,
    error: data
  });

};
