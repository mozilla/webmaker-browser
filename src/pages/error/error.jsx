var React = require('react/addons');
var Footer = require('../../components/footer/footer.jsx');
var Masthead = require('../../components/masthead/masthead.jsx');
var FormattedMessage = require('react-intl').FormattedMessage;

module.exports = React.createClass({
  mixins: [
    React.addons.LinkedStateMixin,
    require('react-router').State,
    require('react-intl').IntlMixin
  ],
  render: function () {
    var helpLink = (<a href="mailto:help@webmaker.org">{this.getIntlMessage('give_us_a_shout')}</a>);
    var teachSiteLink = (<a href="https://teach.mozilla.org/">teach.mozilla.org</a>);
    var currentPath = this.getPathname();
    var errorMessage = this.getIntlMessage('page_404');
    if (currentPath === '/project-not-found') {
      errorMessage = this.getIntlMessage('project_404');
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
                message={this.getIntlMessage('give_us_a_shout_sentence')}
                GiveUsAShoutLink={helpLink} />
            </p>
            <a className="btn" href="#/">{this.getIntlMessage('return_to_webmaker')}</a>
            <p>
              <FormattedMessage
                message={this.getIntlMessage('or_visit_teach_mozilla_org')}
                LinkToTeachSite={teachSiteLink} />
            </p>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
});
