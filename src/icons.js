import React from 'react';
import PropTypes from 'prop-types';

class FaIcon extends React.Component {
  render() {
    const className = `fa fa-lg ${this.props.icon}`
    return (
      <i
        className={className}
        style={this.props.style}
        align="right" />
    );
  }
}

FaIcon.propTypes = {
  icon: PropTypes.string.isRequired
};

export class SortIconBoth extends React.Component {
  render() {
    return (
      <FaIcon icon="fa-sort" style={this.props.style} />
    );
  }
}

export class SortIconAsc extends React.Component {
  render() {
    return (
      <FaIcon icon="fa-sort-asc" style={this.props.style} />
    );
  }
}

export class SortIconDesc extends React.Component {
  render() {
    return (
      <FaIcon icon="fa-sort-desc" style={this.props.style} />
    );
  }
}
