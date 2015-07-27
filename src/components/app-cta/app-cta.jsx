var React = require('react');

var AppCta = React.createClass({
  statics: {
    FALLBACK_URL: 'https://play.google.com/store/apps/details?id=org.mozilla.webmaker'
  },
  mixins: [
    require('react-intl').IntlMixin
  ],
  getInitialState: function () {
    return {
      hidden: false
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
  openApp: function () {
    this.setState({
      loading: true
    });
    this.timeout = setTimeout(function () {
      window.location = AppCta.FALLBACK_URL;
    }, 1000);
    window.location = this.getDeepLink();
  },
  closeCta: function () {
    this.setState({
      hidden: true
    });
  },
  render: function () {
    return (<header hidden={this.state.hidden} className="app-cta">
      <div className="left">
        <h3>{this.getIntlMessage('use_webmaker_app')}</h3>
        <p>{this.getIntlMessage('like_it_better')}</p>
      </div>
      <div className="right">
        <button onClick={this.openApp}>
          <span hidden={this.state.loading}>{this.getIntlMessage('open_app')}</span>
          <span hidden={!this.state.loading} className="open-loading">{this.getIntlMessage('searching')}</span>
        </button>
        <button onClick={this.closeCta}><img src="./img/icon-close.svg" alt="close notice"/><span className="sr-only">{this.getIntlMessage('close_message')}</span></button>
      </div>
    </header>);
  }
});

module.exports = AppCta;
