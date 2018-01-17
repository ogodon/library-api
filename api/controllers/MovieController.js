/**
 * MovieController
 *
 * @description :: Server-side logic for managing movies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
  find: function(req, res) {
    Movie.find().exec(function(err, movies) {
      if(err) {
        return res.serverError('Internal error');
      }
      return res.ok(movies);
    });
  }

};

