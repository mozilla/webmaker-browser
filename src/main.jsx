var React = require('react');
var Router = require('react-router');

var Splash = require('./pages/splash/splash.jsx');
var TOS = require('./pages/legal/tos.jsx');
var Thumbnail = require('./pages/thumbnail/thumbnail.jsx');
var Project = require('./pages/project/project.jsx');
var ErrorView = require('./pages/error/error.jsx');
var intlData = {
    locales : ['en-US'],
    messages: require('./locales/en-US.json')
};
var Route = Router.Route;
var Redirect = Router.Redirect;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

/**
 * Create base class
 */
var App = React.createClass({
  render: function () {
    return <RouteHandler {...intlData} />;
  }
});

/**
 * Define routes
 */
var Routes = (
  <Route path="/" handler={App}>
    <Route path="/thumbnail" handler={Thumbnail} />
    <Route path="/project" handler={Project} />
    <Redirect from="/player" to="/project" />
    <Route path="/legal" handler={TOS} />
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
