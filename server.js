require('habitat').load();

var Hapi = require('hapi');
var Path = require('path');

// Create server
var server = new Hapi.Server({
  connections: {
    router: { stripTrailingSlash: true },
    routes: {
      security: true,
      files: { relativeTo: Path.join(__dirname, 'static') }
    }
  }
});

server.connection({ 
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8000
});

// Routes
server.route({
  method: 'GET',
  path: '/',
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

// Start listening
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
