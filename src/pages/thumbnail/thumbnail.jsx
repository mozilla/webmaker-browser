var React = require('react');
var nets = require('nets');

var ElementGroup = require('../../../node_modules/webmaker-core/src/components/element-group/element-group.jsx');
var types = require('../../../node_modules/webmaker-core/src/components/basic-element/basic-element.jsx').types;

var config = require('../../config');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      elements: {}
    };
  },
  componentWillMount: function () {
    var options = {
      method: 'GET',
      uri: config.API_URI +
        '/users/' + this.props.location.query.user +
        '/projects/' + this.props.location.query.project +
        '/pages/' + this.props.location.query.page,
      json: {}
    };

    nets(options, (err, res, body) => {
      this.setState({isLoading: false});

      if (err || res.statusCode !== 200) {
        return console.error('Could not fetch the page');
      }

      this.setState({
        elements: this.flatten(body.page.elements), 
        background: body.page.styles.backgroundColor || "#F2F6FC"
      });
    });
  },
  render: function () {
    return (
      <div id="thumbnail">
        <div className="container">
          <div className="inner" style={{background: this.state.background}}>
            <ElementGroup
              ref="container"
              interactive={false}
              elements={this.state.elements} />
          </div>
        </div>
      </div>
    );
  },

  /**
   * Converts an array of elements into a flattened hash.
   *
   * @param  {array} elements Array of objects from API
   *
   * @return {object}
   */
  flatten: function (elements) {
    var result = {};
    elements.forEach(element => {
      var obj = types[element.type].spec.flatten(element);
      if (obj) {
        result[element.id] = obj;
      }
    });

    return result;
  }
});
