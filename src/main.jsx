var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, Redirect, IndexRoute} = require('react-router');
var {IntlProvider} = require('react-intl');

var Splash = require('./pages/splash/splash.jsx');
var Legal = require('./pages/legal/legal.jsx');
var Thumbnail = require('./pages/thumbnail/thumbnail.jsx');
var Project = require('./pages/project/project.jsx');
var ErrorView = require('./pages/error/error.jsx');

var intlData = require('./util/i18n').intlData;

/**
 * Create base class
 */
var App = React.createClass({
  render: function () {
    return React.cloneElement(this.props.children);
  }
});

ReactDOM.render((
  <IntlProvider locale="en" messages={intlData.messages}>
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Splash}/>
        <Route path="/legal" component={Legal}/>
        <Redirect from="/player" to="/project"/>
        <Route path="/project" component={Project}/>
        <Route path="/thumbnail" component={Thumbnail}/>
        <Route path="/project-not-found" component={ErrorView}/>
        <Route path="*" component={ErrorView}/>
      </Route>
    </Router>
  </IntlProvider>
), document.querySelector('#app'), () => {
  window.optimizely = window.optimizely || [];
  window.optimizely.push(["activate"]);
});
