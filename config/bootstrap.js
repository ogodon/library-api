/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
  /*
  User.update({ id: 1 }, { administrator: true }).exec(function(err, user) {
    console.log(err, user);
  });
  */
  //User.create({ email: 'olivier@antinea.org', password: 'patapata' }).exec(function(err, user) {});
  
  cb();
};
