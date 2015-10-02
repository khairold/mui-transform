import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class PeopleName extends Component {
  render() {
  	const { children, size, bold } = this.props;
    return (
      <span style={[styles.base, styles[size], bold && styles.bold ]} >{children}</span>
    );
  }
}

var styles = {
  base: {
	  color: '#57ad68',
	  fontSize: 14,
	  fontFamily: 'medium-content-sans-serif-font',
    display: 'block',
	},
  medium: {
    fontSize: 16 
  },
  bold: {
    fontWeight: 'bold'
  }
}

export default Radium(PeopleName);