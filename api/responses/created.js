/**
 * 201 (CREATED) Response
 *
 * Usage:
 * return res.created();
 * return res.created(data);
 * return res.created(data, 'auth/login');
 *
 * @param  {Object} data
 * @param  {String|Object} options
 *          - pass string to render specified view
 */

module.exports = function created (data, options) {

  var req = this.req;
  var res = this.res;
  var sails = req._sails;
  res.status(201);
  return res.json(data);

};
