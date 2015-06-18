var React = require('react');
var Router = require('react-router');

var Splash = require('./pages/splash/splash.jsx');
var TOS = require('./pages/legal/tos.jsx');
var Privacy = require('./pages/legal/privacy.jsx');
var Thumbnail = require('./pages/thumbnail/thumbnail.jsx');
var ErrorView = require('./pages/error/error.jsx');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

/**
 * Create base class
 */
var App = React.createClass({
  render: function () {
    return <RouteHandler />;
  }
});

/**
 * Define routes
 */
var Routes = (
  <Route path="/" handler={App}>
    <Route path="/thumbnail" handler={Thumbnail} />
    <Route path="/legal" handler={TOS} />
    <Route path="/privacy" handler={Privacy} />
    <NotFoundRoute handler={ErrorView} />
    <DefaultRoute handler={Splash} />
  </Route>
);

/**
 * Start router
 */
Router.run(Routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body, function () {
    // After the content is rendered we need to manually activate
    // any Optimizely experiment running on this site
    // https://help.optimizely.com/hc/en-us/articles/200040225#conditional
    window.optimizely = window.optimizely || [];
    window.optimizely.push(["activate"]);
  });
});
