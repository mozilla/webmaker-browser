var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="links">
            <li><a href="https://webmaker.org/en-US/terms">Legal</a></li>
            <li><a href="https://www.mozilla.org/en-US/privacy/websites/">Privacy</a></li>
            <li><a target="_blank" href="https://sendto.mozilla.org/page/contribute/join-mozilla?source=join_link">Donate</a></li>
            <li><a href="mailto:help@webmaker.org">Contact</a></li>
            <li><a target="_blank" href="https://twitter.com/Webmaker">Twitter</a></li>
            <li><a className="tools" target="_blank" href="http://teach.mozilla.org/tools">Thimble & X-Ray Goggles</a>
            </li>
          </ul>
          <img src="./img/mozilla.svg" width="98" height="25" alt="Mozilla" />
        </div>
      </div>
    );
  }
});
