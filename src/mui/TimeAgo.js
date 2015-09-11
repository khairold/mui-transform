import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class TimeAgo extends Component {
  render() {
  	const { children, size } = this.props;
    return (
      <span style={[styles.base, styles[size]]} >{children}</span>
    );
  }
}

var styles = {
  base: {
    fontFamily: 'medium-content-sans-serif-font', 
    fontSize: 12, 
    color: 'rgba(0, 0, 0, 0.4)',
    display: 'block',
    WebkitFontSmoothing: 'antialiased'
  },
  medium: {
    fontSize: 13
  }
}

export default Radium(TimeAgo);