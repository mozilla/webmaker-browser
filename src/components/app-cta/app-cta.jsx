var React = require('react');
var cookie = require('react-cookie');
var platform = require('webmaker-core/src/lib/platform');
var UAParser = require('ua-parser-js');
var ua = new UAParser().getResult();
var {defineMessages, injectIntl, intlShape, FormattedMessage} = require('react-intl');

var AppCta = React.createClass({
  statics: {
    FALLBACK_URL: 'https://play.google.com/store/apps/details?id=org.mozilla.webmaker'
  },
  getInitialState: function () {
    return {
      hidden: cookie.load('hideCTA') ? true : false
    };
  },
  getDeepLink: function () {
    return 'webmaker://play?user=' +
      this.props.user +
      '&project=' +
      this.props.project +
      '#Intent;scheme=webmaker;package=org.mozilla.webmaker;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dorg.mozilla.webmaker;end';
  },
  onBlur: function () {
    // TODO: This still seems to fire, even if the app was launched.
    // i.e. launching the app doesn't trigger a blur
    clearTimeout(this.timeout);
    this.setState({
      loading: false
    });
  },
  isAndroid: function () {
    if (ua && ua.os && ua.os.name === 'Android') {
      return true;
    }
  },
  openApp: function () {

    platform.trackEvent('Browser Player', 'Click CTA Open App', this.getDeepLink());

    this.setState({
      loading: true
    });

    if (!this.isAndroid()) {
      window.location = AppCta.FALLBACK_URL;
      return;
    }

    this.timeout = setTimeout(function () {
      window.location = AppCta.FALLBACK_URL;
    }, 1000);

    window.location = this.getDeepLink();
  },
  closeCta: function () {
    // Keep CTA dismissed for 30 days
    cookie.save('hideCTA', 1, {
      expires: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000))
    });

    this.setState({
      hidden: true
    });
  },
  render: function () {
    var messages = this.props.intl.messages;

    return (<header className={'app-cta' + (this.state.hidden ? ' hidden' : '')}>
      <div className="left">
        <h3>{messages['use_webmaker_app']}</h3>
        <p>{messages['like_it_better']}</p>
      </div>
      <div className="right">
        <button onClick={this.openApp}>
          <span hidden={this.state.loading}>{messages['open_app']}</span>
          <span hidden={!this.state.loading} className="open-loading">{messages['searching']}</span>
        </button>
        <button onClick={this.closeCta}><img src="./img/icon-close.svg" alt="{messages['close_message']}"/></button>
      </div>
    </header>);
  }
});

module.exports = injectIntl(AppCta);
