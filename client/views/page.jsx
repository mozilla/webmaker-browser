var React = require('react');
var xhr = require('xhr');

var ElementGroup = require('../components/element-group/element-group.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      elements: []
    };
  },
  componentWillMount: function () {
    var _this = this;

    xhr({
      method: 'GET',
      uri: 'https://webmaker-api.herokuapp.com' +
        '/users/' + this.props.user + 
        '/projects/' + this.props.project + 
        '/pages/' + this.props.page,
      json: {}
    }, function (err, res, body) {
      if (err || res.statusCode !== 200) {
        console.error('Could not fetch the page');
      }

      _this.setState({
        isLoading: false,
        elements: body.page.elements
      });
    });
  },
  render: function () {
    return (
      <div className="page">
        <ElementGroup
          ref="container"
          interactive={false}
          elements={this.state.elements} />
      </div>
    );
  }
});
