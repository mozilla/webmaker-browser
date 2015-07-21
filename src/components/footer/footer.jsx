var React = require('react');

module.exports = React.createClass({
  mixins: [require('react-intl').IntlMixin],
  render: function () {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="links">
            <li><a href="https://webmaker.org/en-US/terms">{this.getIntlMessage('legal')}</a></li>
            <li><a href="https://www.mozilla.org/en-US/privacy/websites/">{this.getIntlMessage('privacy')}</a></li>
            <li><a target="_blank" href="https://sendto.mozilla.org/page/contribute/join-mozilla?source=join_link">{this.getIntlMessage('donate')}</a></li>
            <li><a href="mailto:help@webmaker.org">{this.getIntlMessage('contact')}</a></li>
            <li><a target="_blank" href="https://twitter.com/Webmaker">{this.getIntlMessage('twitter')}</a></li>
            <li><a className="tools" target="_blank" href="http://teach.mozilla.org/tools">{this.getIntlMessage('thimble_goggles')}</a>
            </li>
          </ul>
          <img src="./img/mozilla.svg" width="98" height="25" alt="Mozilla" />
        </div>
      </div>
    );
  }
});
