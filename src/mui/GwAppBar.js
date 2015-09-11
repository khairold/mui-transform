import React, { Component, PropTypes } from 'react';

class GwAppBar extends Component {
  render() {  
    return (
			<div style={styles.appbar}>
        <span style={styles.appbarTitle} >GW Projects</span>
      </div>
    );
  }
}

var styles = {
  appbar: {
    fontFamily: 'medium-content-sans-serif-font', 
    width: '100%',
    height: 65,
    borderBottom: '1px solid #cccccc',
    display: '-webkit-flex',
    display: 'flex',
    '-webkit-align-items': 'center',
    'align-items': 'center',
    marginBottom: 20
  },
  appbarTitle: {
    fontFamily: 'medium-content-serif-font', 
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 20
  }
}

export default GwAppBar;