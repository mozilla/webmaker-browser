var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div id="splash">
        <div id="masthead">
          <div className="inner">
            <div id="header">
              <img src="./img/logo.png" width="200" height="53" alt="Webmaker" />
            </div>

            <div id="signup">
              <h1>Connect the things you love.</h1>
              <h2>Capture, collect, and share with your friends.</h2>
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
          </div>
        </div>

        <div id="mid">
          <div className="inner">
            <div className="segment quote">
              <p>"There's no better way to learn the mechanics and culture of the web than by playing around and hacking it in a safe, fun environment." <span className="signature">– Lifehacker</span></p>
            </div>

            <div className="segment feature">
              <h4>Local Content</h4>
              <p>We all use the web in different ways. Mozilla is dedicated to helping you build a web that’s relevant to your friends, family, business or community.</p>
            </div>

            <div className="segment feature">
              <h4>Free Forever</h4>
              <p>Mozilla is a non-profit organization and these open-source tools are created by a global community. They will always be 100% free — now and forever!</p>
            </div>
          </div>
        </div>

        <div id="footer">
          <div className="inner">
            <h2>Share the things you love with your friends.</h2>
            <img src="./img/mozilla.svg" width="98" height="25" alt="Mozilla" />
            <ul className="links">
              <li><a href="https://webmaker.org/en-US/terms">Legal</a></li>
              <li><a href="https://webmaker.org/en-US/privacy">Privacy</a></li>
              <li><a href="https://sendto.mozilla.org/page/contribute/join-mozilla?source=join_link">Donate</a></li>
              <li><a href="mailto:help@webmaker.org">Contact</a></li>
              <li><a href="https://twitter.com/Webmaker"><img src="./img/twitter.svg" className="icon"/> Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
