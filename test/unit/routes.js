var Hapi = require('hapi');
var Path = require('path');
var routes = require('../../lib/routes');
var expect = require('expect.js');

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

describe('routes', function(){
  it('should redirect to /thanks after successful signup', function (done) {
    server.inject({
      method: 'POST',
      url: '/signup',
      payload: {
        email: 'dummy@dum.my',
        optin: 1
      },
    }, function (res) {
      expect(res.statusCode).to.equal(302);
      expect(res.headers.location).to.equal('/?thanks');
      done();
    });
  });

  it('should redirect to / with error when email is bad', function (done) {
    server.inject({
      method: 'POST',
      url: '/signup',
      payload: {
        email: '00000000020202002002020202002022002',
        optin: 1
      },
    }, function (res) {
      expect(res.statusCode).to.equal(302);
      expect(res.headers.location).to.equal('/?error&emailError');
      done();
    });
  });

  it('should redirect to / with error when email is undefined', function (done) {
    server.inject({
      method: 'POST',
      url: '/signup',
      payload: {
        optin: 1
      },
    }, function (res) {
      expect(res.statusCode).to.equal(302);
      expect(res.headers.location).to.equal('/?error&emailError');
      done();
    });
  });

  it('should redirect to / with error when optin isn\'t checked', function (done) {
    server.inject({
      method: 'POST',
      url: '/signup',
      payload: {
        email: 'dummy@dum.my',
        optin: 0
      },
    }, function (res) {
      expect(res.statusCode).to.equal(302);
      expect(res.headers.location).to.equal('/?error&optinError');
      done();
    });
  });

  it('should redirect to / with error when optin is undefined', function (done) {
    server.inject({
      method: 'POST',
      url: '/signup',
      payload: {
        email: 'dummy@dum.my',
      },
    }, function (res) {
      expect(res.statusCode).to.equal(302);
      expect(res.headers.location).to.equal('/?error&optinError');
      done();
    });
  });

  it('should redirect to / with error when optin and email are bad', function (done) {
    server.inject({
      method: 'POST',
      url: '/signup',
      payload: {
        email: '',
        optin: ''
      },
    }, function (res) {
      expect(res.statusCode).to.equal(302);
      expect(res.headers.location).to.equal('/?error&emailError&optinError');
      done();
    });
  });
});
