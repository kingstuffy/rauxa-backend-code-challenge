const pager = require('sails-pager');

/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  list: function (req, res) {
    const perPage = req.query.per_page || 20;
    const page = req.query.page || 1;
    const sortBy = req.query.sort_by || 'createdAt';
    const sortDir = req.query.sort_dir || 'ASC';
    const sort = sortBy + ' ' + sortDir.toUpperCase();

    pager.paginate(Contact, {}, page, perPage, null, sort)
      .then(records => ResponseService.json(200, res, 'Data retrieved successfully', records.data, records.meta))
      .catch(err => ResponseService.error(err, res));
  },
};

