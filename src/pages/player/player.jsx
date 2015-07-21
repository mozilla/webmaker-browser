var React = require('react');
var {parseJSON} = require('webmaker-core/src/lib/jsonUtils');
var nets = require('nets');
var config = require('../../config');

var MicroModal = require('../../components/micro-modal/micro-modal.jsx');
var DPad = require('webmaker-core/src/components/d-pad/d-pad.jsx');
var FormattedMessage = require('react-intl').FormattedMessage;

module.exports = React.createClass({
  mixins: [
    require('webmaker-core/src/pages/project/transforms'),
    require('webmaker-core/src/pages/project/remix'),
    require('webmaker-core/src/pages/project/cartzoom'),
    require('webmaker-core/src/pages/project/pageadmin'),
    require('webmaker-core/src/pages/project/loader'),
    require('webmaker-core/src/pages/project/setdestination'),
    require('webmaker-core/src/pages/project/renderhelpers'),
    require('webmaker-core/src/pages/project/dpad-logic'),
    require('webmaker-core/src/pages/project/form-pages'),
    require('react-intl').IntlMixin
  ],

  getInitialState: function () {
    return {
      loading: true,
      selectedEl: '',
      pages: [],
      camera: {},
      zoom: this.DEFAULT_ZOOM,
      isPageZoomed: false,
      params: {
        user: this.props.query.user,
        project: this.props.query.project,
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
        '/users/' + this.props.query.user +
        '/projects/' + this.props.query.project,
      json: {}
    };

    nets(options, (err, res, body) => {
      if (err || res.statusCode !== 200) {
        return console.error('Could not fetch the page');
      }

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
            camera: state.camera,
            zoom: state.zoom
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
    var mode = this.state.params.mode;
    var isPlayOnly = (mode === 'play' || mode === 'link');
    return (
      <div id="player-body">
        <header>
          <a href="/"><img src="/img/newlogo.png"/></a>
          <h1>
            <FormattedMessage
              message={this.getIntlMessage('project_title_play_page')}
              projectName={ this.state.projectName }
              projectAuthor={ this.state.projectAuthor }/>
          </h1>
        </header>
        <div id="map" className={ mode }>
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

        <MicroModal ref="androidModal">
          <p>{this.getIntlMessage('made_with_webmaker_android')}</p>
          <div className="buttons">
            <a href="https://play.google.com/store/apps/details?id=org.mozilla.webmaker" target="_blank">
              <img src="/img/google-play.png"/>
            </a>
            <div className="column">
              <button onClick={this.dismissCTA}>{this.getIntlMessage('no_thanks')}</button>
            </div>
          </div>
        </MicroModal>
      </div>
    );
  }
});
