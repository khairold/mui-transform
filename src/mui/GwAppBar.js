import React, { Component, PropTypes } from 'react';
import ProjectTab from './ProjectTab';

class GwAppBar extends Component {
  render() {  
    const { title, tab, activeTab, tabNames } = this.props;
    let projectTab = tab ? <ProjectTab activeTab={activeTab} tabNames={tabNames} /> : null;

    return (
			<div style={styles.appbar}>
        <span style={styles.appbarTitle} >{title}</span>
        {projectTab}
      </div>
    );
  }
}

var styles = {
  appbar: {
    fontFamily: 'medium-content-sans-serif-font', 
    width: '100%',
    height: 45,
    paddingTop: 20,
    borderBottom: '1px solid #f3f3f3',
    display: '-webkit-flex',
    display: 'flex',
    '-webkit-align-items': 'baseline',
    'align-items': 'baseline',
    marginBottom: 20
  },
  appbarTitle: {
    fontFamily: 'medium-content-serif-font', 
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    paddingLeft: 14
  }
}

export default GwAppBar;