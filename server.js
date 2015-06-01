var Hapi = require('hapi');
var Path = require('path');
var routes = require('./server/routes');

// Create server
var server = new Hapi.Server({
  connections: {
    router: { stripTrailingSlash: true },
    routes: {
      files: { relativeTo: Path.join(__dirname, 'build') }
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
