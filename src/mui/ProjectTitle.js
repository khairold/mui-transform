import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class ProjectTitle extends Component {
  render() {
  	const { children, size, invert, inline, italic } = this.props;
    return (
      // <div style={styles.base} >
        <span style={[styles.title, styles[size], invert && styles.invert, inline && styles.inline, italic && styles.italic]} >{children}</span>
        
      // </div>
    );
  }
}

var styles = {
  base: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    // WebkitFontSmoothing: 'antialiased',
    borderCollapse: 'separate',
    color: '#333333',
    display: 'block',
    fontFamily: "medium-content-sans-serif-font, 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif",
    fontSize: 22,
    height: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 'normal',
    wordWrap: 'break-word'
  },
  invert: {
    color: '#ffffff',
  },
  list: {
    fontSize: 18,
    height: 18,
    fontWeight: 'normal'
  },
  small: {
    fontSize: 22,
    height: 25
  },
  medium: {
    fontSize: 26,
    height: 29
  },
  large: {
    fontSize: 60,
    height: 66
  },
  card: {
    fontSize: 22,
    height: 28
  },
  inline: {
    display: 'inline-block',
    marginRight: 6
  },
  italic: {
    fontStyle: 'italic'
  }
}

export default Radium(ProjectTitle); 