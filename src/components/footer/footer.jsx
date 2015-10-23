var React = require('react');
var {defineMessages, injectIntl, intlShape, FormattedMessage} = require('react-intl');

var Footer = React.createClass({
  render: function () {
    var messages = this.props.intl.messages;

    return (
      <div id="footer">
        <div className="inner">
          <ul className="links">
            <li><a href="https://webmaker.org/#/legal">{messages['legal']}</a></li>
            <li><a href="https://www.mozilla.org/en-US/privacy/websites/">{messages['privacy']}</a></li>
            <li><a target="_blank" href="https://sendto.mozilla.org/page/contribute/join-mozilla?source=join_link">{messages['donate']}</a></li>
            <li><a href="mailto:help@webmaker.org">{messages['contact']}</a></li>
            <li><a target="_blank" href="https://twitter.com/Webmaker">{messages['twitter']}</a></li>
            <li><a className="tools" target="_blank" href="http://teach.mozilla.org/tools">{messages['thimble_goggles']}</a>
            </li>
          </ul>
          <img src="./img/mozilla.svg" width="98" height="25" alt="Mozilla" />
        </div>
      </div>
    );
  }
});

module.exports = injectIntl(Footer);
