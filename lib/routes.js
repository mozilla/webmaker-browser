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
    method: 'POST',
    path: '/signup',
    handler: function (request, reply) {
      reply.file('index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/{path}/{param*}',
    handler: {
      directory: {
        path: [
          'css',
          'fonts',
          'images',
          'js'
        ]
      }
    }
  });
};
