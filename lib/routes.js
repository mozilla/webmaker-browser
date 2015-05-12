var bsd = require('./bsd');
var Joi = require('joi');

module.exports = function (server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: function (request, reply) {
      reply.file('favicon.ico');
    }
  });

  server.route({
    method: 'POST',
    path: '/signup',
    config: {
      validate: {
        payload: {
          email: Joi.string().email().required(),
          optin: Joi.string().valid('1').required()
        },
        failAction: function (request, reply, source, error) {
          reply().takeover().redirect('/?error&' + error.data.details[0].path + 'Error');
        }
      }
    },
    handler: function (request, reply) {
      bsd(request.payload.email, function (err, body) {
        if (err) {
          console.log('BSD Submission Error: ', err, body);
        }
      });

      // Reply immediately regardless of BSD success.
      // TODO: Should block? Check for specific BSD errors.
      reply.redirect('/?thanks');
    }
  });

  server.route({
    method: 'GET',
    path: '/{path}/{param*}',
    handler: {
      directory: {
        path: [
          'css',
          'favicons',
          'fonts',
          'images',
          'js'
        ]
      }
    }
  });
};
