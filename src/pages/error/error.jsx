var React = require('react');
var Footer = require('../../components/footer/footer.jsx');
var Masthead = require('../../components/masthead/masthead.jsx');
var {defineMessages, injectIntl, intlShape, FormattedMessage} = require('react-intl');

var Error = React.createClass({
  render: function () {
    var messages = this.props.intl.messages;
    var helpLink = (<a href="mailto:help@webmaker.org">{messages['give_us_a_shout']}</a>);
    var teachSiteLink = (<a href="https://teach.mozilla.org/">teach.mozilla.org</a>);
    var currentPath = this.props.location.pathname;
    var errorMessage = messages['page_404'];

    if (currentPath === '/project-not-found') {
      errorMessage = messages['project_404'];
    }

    return (
      <div id="splash" className="error">
        <Masthead/>

        <div id="mid">
          <div className="inner legal centered">
            <h1>404</h1>
            <h2>{errorMessage}</h2>
            <p>
              <FormattedMessage
                id="giveShout"
                defaultMessage={messages['give_us_a_shout_sentence']}
                values={{GiveUsAShoutLink: helpLink}} />
            </p>
            <a className="btn btn-uppercase" href="#/">{messages['return_to_webmaker']}</a>
            <p>
              <FormattedMessage
                id="teachLink"
                defaultMessage={messages['or_visit_teach_mozilla_org']}
                values={{LinkToTeachSite: teachSiteLink}} />
            </p>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
});

module.exports = injectIntl(Error);
