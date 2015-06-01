var React = require('react/addons');
var qs = require('qs');

var Page = require('./client/views/page.jsx');

var Client = React.createClass({
  mixins: [],
  getInitialState: function () {
    var search = window.location.search.substr(1);
    var params = qs.parse(search);
    return params;
  },
  render: function () {
    return (
      <Page 
        user={this.state.user} 
        project={this.state.project} 
        page={this.state.page} />
    );
  }
});

React.render(
  <Client />,
  document.getElementById('app')
);
