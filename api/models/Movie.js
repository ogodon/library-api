/**
 * Movie.js
 *
 * @description Movies stored
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    author: {
      type: 'string',
      required: true
    },
    releaseYear: {
      type: 'integer',
      required: true
    },
    createdByUser: {
      model: 'user'
    }
  }

};
