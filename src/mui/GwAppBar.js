import React, { Component, PropTypes } from 'react';
import ProjectTab from './ProjectTab';

class GwAppBar extends Component {
  render() {  
    const { title, tab, activeTab, tabNames, shorten } = this.props;
    let projectTab = !shorten ? <ProjectTab activeTab={activeTab} tabNames={tabNames} /> : null;

    let longTitle = <span style={styles.appbarTitle} >GW Projects</span>;
    // let shortTitle = <span style={styles.appbarTitle} ><span style={styles.blockP}>P</span></span>;
    let shortTitle = <span style={styles.appbarTitle} >GW</span>;
    let titleText = !shorten ? longTitle : shortTitle;
    return (
      <div style={styles.appbar}>
        {titleText}
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
    paddingLeft: 14,
    marginRight: 30
  },
  blockP: {
    width: 34,
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'inline-block',
    textAlign: 'center',
    marginRight:2
  }
}

export default GwAppBar;