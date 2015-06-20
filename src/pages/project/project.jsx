var React = require('react');
var nets = require('nets');
var config = require('../../config');

var Card = React.createClass({
  getDefaultProps: function () {
    return {};
  },
  componentDidMount: function () {
    window.addEventListener('blur', this.onBlur);
  },
  componentDidUnmount: function () {
    window.removeEventListener('blur', this.onBlur);
  },
  onBlur: function () {
    clearTimeout(this.timeout);
  },
  onClick: function () {
    var fallback = this.props.fallback;
    if (fallback) {
      this.timeout = setTimeout(function () {
        window.location = fallback;
      }, 2000);
    }
    window.location = this.props.link;
  },
  render: function () {
    var project = this.props.project || {};
    var thumbnail = project.thumbnail && project.thumbnail[320];
    return (<div hidden={!project.title} className={project.title ? 'card' : ''} onClick={this.onClick}>
      <div className="thumbnail">
        <img src={thumbnail ? thumbnail : './img/default.svg'} />
      </div>
      <div className="text">
        <h3 className="title">{project.title}</h3>
        <p className="author">{project.author && project.author.username}</p>
      </div>
    </div>);
  }
});

module.exports = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false,
      project: null,
      error: false
    };
  },

  componentWillMount: function () {
    var options = {
      method: 'GET',
      uri: config.API_URI +
        '/users/' + this.props.query.user +
        '/projects/' + this.props.query.project,
      json: {}
    };

    this.setState({isLoading: true});
    nets(options, (err, res, body) => {
      this.setState({isLoading: false});

      if (err || res.statusCode !== 200) {
        this.setState({error: true});
        return console.error('Not found');
      }

      this.setState({project: body.project, error: false});
    });
  },
  render: function () {
    var link = 'intent://play?user=' + this.props.query.user + '&project=' + this.props.query.project + '#Intent;scheme=webmaker;package=org.mozilla.webmaker;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dorg.mozilla.webmaker;end';
    return (
      <div id="project">
        <div hidden={!this.state.error}>Sorry, this project does not seem to exist!</div>
        <Card project={this.state.project} link={link} fallback="https://play.google.com/store/apps/details?id=org.mozilla.webmaker" />
      </div>
    );
  }
});
