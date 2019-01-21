/**
 * ResponseService.js
 */

module.exports = {
  json(status, res, message, data, meta) {
    let response = {
      message: message
    };
    if (typeof data !== 'undefined') {
      response.data = data;
    }
    if (typeof meta !== 'undefined') {
      response.meta = meta;
    }
    return res.status(status).json(response);
  },
  error(err, res) {
    let response = {
      message: 'Validation error has occured',
    };
    if (err.Errors) {
      response.errors = err.Errors;
      return res.status(400).json(response);
    }

    if (err.invalidAttributes) {
      response.errors = err.invalidAttributes;
      return res.status(400).json(response);
    }
    /* istanbul ignore next */
    let e = JSON.parse(JSON.stringify(err));
    /* istanbul ignore next */
    if (e.raw) {
      /* istanbul ignore if */
      if (e.raw.length && !_.isUndefined(e.raw[0].err)) {
        response.errors = e.raw[0].err.Errors;
      } else {
        response.errors = e.raw;
      }
      return res.status(400).json(response);
    }
    /* istanbul ignore next */
    return res.negotiate(err);
  },
};
