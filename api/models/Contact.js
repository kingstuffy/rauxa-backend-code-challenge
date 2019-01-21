/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */


module.exports = {
  attributes: {
    type: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      required: true
    },
    thumbnailUrl: {
      type: 'string',
      required: true
    },
    imgUrl: {
      type: 'string',
      required: true
    },
  },
};

