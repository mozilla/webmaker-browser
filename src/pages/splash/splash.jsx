var React = require('react');
var Promo = require('../../components/promo/promo.jsx');
var Footer = require('../../components/footer/footer.jsx');
var Masthead = require('../../components/masthead/masthead.jsx');
var {defineMessages, injectIntl, intlShape, FormattedMessage} = require('react-intl');

var Splash = React.createClass({
  render: function () {
    var messages = this.props.intl.messages;

    return (
      <div id="splash">
        <Masthead>
          <div id="signup">
            <h1>{messages['connect_things_you_love']}</h1>
            <h2>{messages['capture_collect_share']}</h2>
            <div className="google-play">
              <a href="https://play.google.com/store/apps/details?id=org.mozilla.webmaker">
                <img alt="Get it on Google Play"
                     src="./img/google-play.png" />
              </a>
            </div>
          </div>

          <div id="hero">
            <img src="./img/hero@2x.png" width="260" alt="The Mozilla Webmaker for Android App" />
          </div>
        </Masthead>

        <div id="mid">
          <div className="inner">
            <div className="segment quote">
              <p>"{messages['lifehackersquote']}" <span className="signature">– Lifehacker</span></p>
            </div>

            <div className="segment feature">
              <h4>{messages['local_content']}</h4>
              <p>{messages['use_the_web_different_ways']}</p>
            </div>

            <div className="segment feature">
              <h4>{messages['free_forever']}</h4>
              <p>{messages['mozilla_open_source']}</p>
            </div>
          </div>
        </div>

        <div id="thimble-promo">
          <Promo
            logoAlt="Thimble Logo"
            logoSrc="./img/thimble.svg"
            head={messages['thimble_write_web']}
            subhead={messages['thimble_cta']}
            ctaText={messages['thimble_try']}
            ctaLink="https://thimble.mozilla.org/?ref=webmaker.org"
          />
        </div>

        <Footer/>
      </div>
    );
  }
});

module.exports = injectIntl(Splash);
