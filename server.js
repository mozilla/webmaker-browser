var Hapi = require('hapi');
var Path = require('path');
var qs = require('querystring');
var bunyan = require('bunyan');
var nets = require('nets');

var config = require('./src/config');

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

// Bunyan Logging
server.register({
  register: require('hapi-bunyan'),
  options: {
    logger: bunyan.createLogger({
      name: 'webmaker-desktop',
      level: process.env.LOG_LEVEL || 'debug'
    })
  }
}, function(err) {
  if ( err ) {
    throw err;
  }
});


server.views({
  engines: {
    html: require('handlebars')
  },
  relativeTo: __dirname,
  path: './views',
});

// Route handlers
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    if (!request.query.project) {
      reply.file('index.html');
    } else {
      var options = {
        method: 'GET',
        uri: config.API_URI +
        '/users/' + request.query.user +
        '/projects/' + request.query.project,
        json: {}
      };

      nets(options, function (err, res, body) {
        if (err || res.statusCode !== 200) {
          reply.file('index.html');
          return;
        }

        var images = body.project.thumbnail;
        var thumb;

        if (images && images[320]) {
          thumb = images[320];
        }

        reply.view(
          'project',
          {
            user: body.project.author.username,
            title: body.project.title,
            image: thumb,
            host: request.info.host
          });
      });
    }
  }
});

server.route({
  method: 'GET',
  path: '/users/{user}/projects/{project}',
  handler: function (request, reply) {
    reply.redirect('/?' + qs.stringify(request.params) + '#/project?' + qs.stringify(request.params));
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
  method: 'GET',
  path: '/{path}/{param*}',
  handler: {
    directory: {
      path: [
        'css',
        'favicons',
        'fonts',
        'img',
        'js'
      ]
    }
  }
});

// Start listening
server.start(function () {
  console.log('Server running at:', server.info.uri);
});
