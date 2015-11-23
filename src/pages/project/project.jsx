var React = require('react');
var {defineMessages, injectIntl, intlShape, FormattedMessage} = require('react-intl');
var {parseJSON} = require('webmaker-core/src/lib/jsonUtils');
var nets = require('nets');
var config = require('../../config');
var platform = require('webmaker-core/src/lib/platform');

var DPad = require('webmaker-core/src/components/d-pad/d-pad.jsx');
var AppCta = require('../../components/app-cta/app-cta.jsx');

var Project = React.createClass({
  mixins: [
    require('webmaker-core/src/pages/project/transforms'),
    require('webmaker-core/src/pages/project/remix'),
    require('webmaker-core/src/pages/project/cartzoom'),
    require('webmaker-core/src/pages/project/pageadmin'),
    require('webmaker-core/src/pages/project/loader'),
    require('webmaker-core/src/pages/project/setdestination'),
    require('webmaker-core/src/pages/project/renderhelpers'),
    require('webmaker-core/src/pages/project/dpad-logic'),
    require('webmaker-core/src/pages/project/form-pages')//,
  ],

  getInitialState: function () {
    return {
      loading: true,
      selectedEl: '',
      pages: [],
      matrix: [this.DEFAULT_ZOOM, 0, 0, this.DEFAULT_ZOOM, 0, 0 ],
      isPageZoomed: false,
      isFirstLoad: true,
      params: {
        user: this.props.location.query.user,
        project: this.props.location.query.project,
        mode: 'play'
      },
      projectName: 'Untitled',
      projectAuthor: 'Anonymous'
    };
  },

  componentWillMount: function () {
    this.load();

    // Add CSS hook
    document.querySelector('html').setAttribute('id', 'project-player');

    // Retrieve project metadata: project name & author
    var options = {
      method: 'GET',
      uri: config.API_URI +
        '/users/' + this.props.location.query.user +
        '/projects/' + this.props.location.query.project,
      json: {}
    };

    nets(options, (err, res, body) => {
      if (res.statusCode === 404) {
        return this.replaceWith('/project-not-found?user=' + this.props.location.query.user + '&project=' + this.props.location.query.project);
      }

      if (err || res.statusCode !== 200) {
        return console.error('Could not fetch the page');
      }

      platform.trackEvent('Browser Player', 'Open Project Success', options.uri);

      this.setState({
        projectAuthor: body.project.author.username,
        projectName: body.project.title
      });
    });
  },

  componentDidUpdate: function (prevProps) {
    if (this.props.isVisible && !prevProps.isVisible) {
      this.load();
    }

    if (window.Platform) {
      window.Platform.setMemStorage('state', JSON.stringify(this.state));
    }
  },

  componentDidMount: function () {
    if (window.Platform) {
      var state = window.Platform.getMemStorage('state');
      if (this.state.params.mode === 'edit') {
        state = parseJSON(state);
        if (state.params && state.params.project === this.state.params.project) {
          this.setState({
            selectedEl: state.selectedEl,
            matrix: state.matrix
          });
        }
      }
    }

  },

  dismissCTA: function () {
    this.refs.androidModal.hide();
  },

  render: function () {
    // FIXME: TODO: this should be handled with a touch preventDefault,
    //              not by reaching into a DOM element.
    //
    // Prevent pull to refresh
    // FIXME: TODO: This should be done by preventDefaulting the touch event, not via CSS.
    // FIXME: TODO: Add <Loading /> component after localization is initialized
    document.body.style.overflowY = 'hidden';
    var messages = this.props.intl.messages;
    var mode = this.state.params.mode;
    var isPlayOnly = (mode === 'play' || mode === 'link');
    return (
      <div id="player-body">
        <header className="main">
          <a href="/"><img src="/img/newlogo.png"/></a>
          <h1>
            <FormattedMessage
              id="projectTitle"
              defaultMessage={messages['project_title_play_page']}
              values={{
                projectName: this.state.projectName,
                projectAuthor: this.state.projectAuthor
              }}/>
          </h1>
        </header>
        <AppCta project={this.state.params.project} user={this.state.params.user} />
        <div ref="map" id="map" className={ mode }>
          <DPad
            ref="dpad"
            onDirectionClick={ this.handleDirectionClick }
            isVisible={ this.state.isPageZoomed }>
          </DPad>

          <div ref="bounding" className="bounding" style={ this.getBoundingStyle() }>
            <div className="test-container" style={ this.getContainerStyle() }>
            { this.formPages() }
            { this.generateAddContainers(isPlayOnly) }
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = injectIntl(Project);
