import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class GreyedText extends Component {
  render() {
  	const { children, size, brightness, style, block, bold } = this.props;
    return (
      <span style={[style, block && styles.block, bold && styles.bold, styles.base, styles[size], styles[brightness]]} >{children}</span>
    );
  }
}

var styles = {
  base: {
    fontFamily: 'medium-content-sans-serif-font', 
    fontSize: 12, 
    WebkitFontSmoothing: 'antialiased',
    color: 'rgba(0, 0, 0, 0.4)'
  },
  medium: {
    fontSize: 14
  },
  list: {
    fontFamily: 'medium-content-sans-serif-font', 
    fontSize: 14, 
    color: '#777777'
  },
  darker: {
    color: '#8f8f8f'
  }, 
  darkest: {
    color: '#555555'
  },
  block: {
    display: 'block'
  },
  bold: {
    fontWeight: 'bold'
  }

}

export default Radium(GreyedText);