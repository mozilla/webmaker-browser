var Hapi = require('hapi');
var Path = require('path');
var routes = require('./lib/routes');

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
  port: process.env.PORT || 8000
});

// Route handlers
routes(server);

// Start listening
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
