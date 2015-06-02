var React = require('react');
var xhr = require('xhr');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      emailError: null,
      optinError: null
    };
  },
  render: function () {
    return (
      <div id="splash">
        <div id="masthead">
          <div className="inner">
            <div id="header">
              <img src="./images/logo.svg" width="144" height="40" alt="Webmaker" />
            </div>

            <div id="signup">
              <h1>Connect the things you love.</h1>
              <h2>Capture, collect, and share with your friends.</h2>

              <div id="thanks">
                <h3>Thanks for signing up! We'll be in touch soon.</h3>
              </div>

              <form method="post" action="/signup">
                <div>
                  <input type="text" name="email" placeholder="Email me when it’s ready" />
                  <button type="submit">Go</button>
                </div>
                <div className="tooltip email">This email doesn't appear to be valid.</div>

                <div id="optin">
                  <input type="checkbox" name="optin" value="1" />
                  <label>By submitting, I agree to Webmaker‘s <a href="https://www.mozilla.org/en-US/privacy/websites/" target="_blank">Privacy Policy</a>.</label>
                </div>
                <div className="tooltip optin">Oops! You forgot to check this.</div>
              </form>
            </div>

            <div id="hero">
              <img src="./images/hero@2x.png" width="260" alt="The Mozilla Webmaker for Android App" />
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
            <img src="./images/mozilla.svg" width="98" height="25" alt="Mozilla" />
            <ul className="links">
              <li><a href="https://webmaker.org/en-US/privacy">Privacy</a></li>
              <li><a href="https://webmaker.org/en-US/terms">Legal</a></li>
              <li><a href="mailto:help@webmaker.org">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  },

  validate: function () {

  },

  submit: function () {
    
  }
});
