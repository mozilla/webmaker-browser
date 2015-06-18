var React = require('react/addons');
var Footer = require('../../components/footer/footer.jsx');
var Masthead = require('../../components/masthead/masthead.jsx');

module.exports = React.createClass({
  mixins: [
    React.addons.LinkedStateMixin
  ],
  render: function () {
    return (
      <div id="splash" className="error">
        <Masthead/>

        <div id="mid">
          <div className="inner legal centered">
            <h1>404</h1>
            <h2>This page doesn't exist!</h2>
            <p><a href="mailto:help@webmaker.org">Give us a shout</a> if you think there's something wrong.</p>
            <a className="btn" href="#/">Return to Webmaker</a>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
});
