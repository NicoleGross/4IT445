import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Label extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
  };

  render() {
    const { id, label, ...rest } = this.props;

    return <label htmlFor={id} {...rest}>{label}</label>;
  }
}
