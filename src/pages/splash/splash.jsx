var React = require('react/addons');
var MakerPartyPromo = require('../../components/promo/promo.jsx');
var Footer = require('../../components/footer/footer.jsx');
var Masthead = require('../../components/masthead/masthead.jsx');

module.exports = React.createClass({
  mixins: [require('react-intl').IntlMixin],
  render: function () {
    return (
      <div id="splash">
        <Masthead>
          <div id="signup">
            <h1>{this.getIntlMessage('connect_things_you_love')}</h1>
            <h2>{this.getIntlMessage('capture_collect_share')}</h2>
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
              <p>"{this.getIntlMessage('lifehackersquote')}" <span className="signature">– Lifehacker</span></p>
            </div>

            <div className="segment feature">
              <h4>{this.getIntlMessage('local_content')}</h4>
              <p>{this.getIntlMessage('use_the_web_different_ways')}</p>
            </div>

            <div className="segment feature">
              <h4>{this.getIntlMessage('free_forever')}</h4>
              <p>{this.getIntlMessage('mozilla_open_source')}</p>
            </div>
          </div>
        </div>

        <div id="mp-promo">
          <MakerPartyPromo
            logoAlt="Maker Party Promo"
            logoSrc="./img/maker-party@2x.png"
            head={this.getIntlMessage('host_maker_party')}
            subhead={this.getIntlMessage('maker_party_cta')}
            ctaText={this.getIntlMessage('get_started')}
            ctaLink="https://teach.mozilla.org/events/?ref=beta.webmaker.org"
          />
        </div>

        <Footer/>
      </div>
    );
  }
});
