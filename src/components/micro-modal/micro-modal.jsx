var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      isVisible: true
    };
  },
  show: function () {
    this.setState({
      isVisible: true
    });
  },
  hide: function () {
    this.setState({
      isVisible: false
    });
  },
  render: function () {
    return (
      <div className={ 'micro-modal' + (this.state.isVisible ? '' : ' hidden') }>
        {this.props.children}
      </div>
    );
  }
});
