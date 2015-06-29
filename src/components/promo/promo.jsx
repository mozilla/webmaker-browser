var React = require('react');

module.exports = React.createClass({
  propTypes: {
    logoAlt: React.PropTypes.string.isRequired,
    logoSrc: React.PropTypes.string.isRequired,
    head: React.PropTypes.string.isRequired,
    subhead: React.PropTypes.string.isRequired,
    ctaText: React.PropTypes.string.isRequired,
    ctaLink: React.PropTypes.string.isRequired,
  },
  handleBtnClick: function () {
    window.location.href = this.props.ctaLink;
  },
  render: function () {
    return (
      <div className="promo">
        <div className="inner">
          <img alt={this.props.logoAlt}
               src={this.props.logoSrc}
               width="100" />
          <h3>{this.props.head}</h3>
          <h4>{this.props.subhead}</h4>
          <button onClick={this.handleBtnClick}>{this.props.ctaText}</button>
        </div>
      </div>
    );
  }
});
