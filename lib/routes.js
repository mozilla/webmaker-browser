var bsd = require('./bsd');

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
    handler: function (request, reply) {
      var email = request.payload.email + '';
      var optin = request.payload.optin + '';

      var emailCheck = !!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i);
      var optinCheck = optin + '' === '1';

      if (optinCheck && emailCheck) {
        bsd(email, function (err, body) {
          if (err) {
            console.log('BSD Submission Error: ', err, body);
          }
        });

        // Reply immediately regardless of BSD success.
        // TODO: Should block? Check for specific BSD errors.
        reply.redirect('/?thanks');
      }
      else {
        reply.redirect('/?error' +
          (!emailCheck ? '&emailError' : '') +
          (!optinCheck ? '&optinError' : ''));
      }
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
