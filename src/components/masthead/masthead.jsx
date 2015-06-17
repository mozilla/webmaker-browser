var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div id="masthead">
        <div className="inner">
          <div id="header">
            <a href="#/"><img src="./img/logo.png" width="200" height="53" alt="Webmaker" /></a>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
});
