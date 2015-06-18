var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div id="footer">
        <div className="inner">
          <h2>Share the things you love with your friends.</h2>
          <img src="./img/mozilla.svg" width="98" height="25" alt="Mozilla" />
          <ul className="links">
            <li><a href="#/legal">Legal</a></li>
            <li><a href="#/privacy">Privacy</a></li>
            <li><a target="_blank" href="https://sendto.mozilla.org/page/contribute/join-mozilla?source=join_link">Donate</a></li>
            <li><a href="mailto:help@webmaker.org">Contact</a></li>
            <li><a target="_blank" href="https://twitter.com/Webmaker">Twitter</a></li>
          </ul>
        </div>
      </div>
    );
  }
});
