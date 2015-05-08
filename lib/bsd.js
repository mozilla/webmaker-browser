var request = require('request');

/**
 * Creates a new email subscription via BSD
 *
 * @param  {string}   email    A valid email address
 * @param  {Function} callback
 *
 * @return {void}
 */
module.exports = function (email, callback) {
  request({
    method: 'POST',
    uri: 'https://sendto.mozilla.org/page/s/webmaker-for-android-beta-signup',
    form: {
      opt_in: 1,
      email: email
    }
  }, function (err, res, body) {
    if (err) {
      return callback(err);
    }

    if (res.statusCode !== 302) {
      return callback(res.statusCode);
    }

    callback(null, body);
  });
};
