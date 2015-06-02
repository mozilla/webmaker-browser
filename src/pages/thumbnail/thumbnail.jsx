var React = require('react');
var nets = require('nets');

var ElementGroup = require('../../components/element-group/element-group.jsx');
var types = require('../../components/el/el.jsx').types;

module.exports = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      elements: {}
    };
  },
  componentWillMount: function () {
    var _this = this;

    nets({
      method: 'GET',
      uri: 'https://webmaker-api.herokuapp.com' +
        '/users/' + _this.props.query.user + 
        '/projects/' + _this.props.query.project + 
        '/pages/' + _this.props.query.page,
      json: {}
    }, function (err, res, body) {
      if (err || res.statusCode !== 200) {
        return console.error('Could not fetch the page');
      }

      _this.setState({
        isLoading: false,
        elements: _this.flatten(body.page.elements)
      });
    });
  },
  render: function () {
    return (
      <div id="thumbnail">
        <div className="container">
          <div className="inner">
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
