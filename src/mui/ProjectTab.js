import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import slug from 'slug';

class ProjectTabItem extends Component {
  render() {  
    const { tabName, activeTab } = this.props;
    let active = activeTab == tabName ? true : false;
    return (
      <li style={styles.tabItem} >
        <a key={slug(tabName)} style={[styles.a, active && styles.active]} href={slug(tabName)}>{tabName.toUpperCase()}</a>
      </li>
    );
  }
}
ProjectTabItem = Radium(ProjectTabItem);

class ProjectTab extends Component 
{  
  render() {
    const { tabNames, activeTab, container } = this.props;  
    let tabItemNodes = tabNames.map(function(tabName){
      return (
        <ProjectTabItem tabName={tabName} activeTab={activeTab} />
      );
    });

    return (
      <div style={container} >
        <div style={styles.base} >
    			<nav style={styles.tab}>
            <ul>
              {tabItemNodes}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const styles = {
  base: {
    // marginLeft: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  tab: {
    fontFamily: 'medium-content-sans-serif-font', 
    fontSize: 11,
    letterSpacing: 1.1
  },
  tabItem: {
    display: 'inline-block'
  },
  a: {
    fontFamily: 'medium-content-sans-serif-font', 
    fontSize: 11,
    letterSpacing: 1.1,
    color: '#777777',
    textDecoration: 'none',
    margin: '0 20px 0 0',
    padding: '16px 0 16px 0',
    ':hover': {
      color: '#333333'
    }
  },
  active: {
    borderBottom: '2px solid #333333',
    fontWeight: 'bold',
    color: '#333333'
  }
}

export default Radium(ProjectTab);