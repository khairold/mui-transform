import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { FontIcon, IconButton } from 'material-ui';

import GreyedText from './GreyedText';
import ProjectUpdateHistoryIcon from './ProjectUpdateHistoryIcon';
import ProjectBookmarkIcon from './ProjectBookmarkIcon';


class ProjectInfoIcon extends Component {
  render() {
    const { activeProjectSubPage } = this.props;
    let icon;
    if (activeProjectSubPage == 'info') {
      icon = <FontIcon className="material-icons" color={'#333333'} style={{color:'#333333', fontSize:36, margin:'0 10px 0 0'}} >info</FontIcon>;
    } else {
      icon = <IconButton iconStyle={{color:'#8f8f8f'}} iconClassName="material-icons" tooltipPosition="top-left" tooltip="info">info_outline</IconButton>;
    }
    return (
      <span>{icon}</span>
    );
  }
}

class ProjectPeopleIcon extends Component {
  render() {
    const { activeProjectSubPage } = this.props;
    let icon;
    if (activeProjectSubPage == 'people') {
      icon = <FontIcon className="material-icons" color={'#333333'} style={{color:'#333333', fontSize:36, margin:'0 10px 0 10px'}} >people</FontIcon>;
    } else {
      icon = <IconButton iconStyle={{color:'#8f8f8f'}} iconClassName="material-icons" tooltipPosition="top-left" tooltip="people">people_outline</IconButton>;
    }
    return (
      <span>{icon}</span>
    );
  }
}

class ProjectChatIcon extends Component {
  render() {
    return (
      <IconButton iconStyle={{color:'#8f8f8f'}} iconClassName="material-icons" tooltipPosition="top-left" tooltip="discussons">chat_bubble_outline</IconButton>
    );
  }
}

class ProjectUpdateFooterBar extends Component {
  render() {
  	const { activeProjectSubPage, bookMarked, topPeople, toGo } = this.props;
    return (
      <div style={{position: 'fixed', zIndex: 1, bottom: 0, width: '100%'}}>
        <div style={styles.base}>
          <div style={styles.leftIcons}>
            <ProjectInfoIcon activeProjectSubPage={activeProjectSubPage} />
            <ProjectPeopleIcon activeProjectSubPage={activeProjectSubPage} />
            <ProjectChatIcon />
            <ProjectUpdateHistoryIcon activeProjectSubPage={activeProjectSubPage} />
          </div>
          <div style={styles.right} >
            <GreyedText style={{fontStyle: 'italic', marginLeft: 20}} brightness={'darker'} size={'medium'} >{toGo}</GreyedText> 
            <ProjectBookmarkIcon bookMarked={bookMarked} style={{margin: '0 8px'}} />
          </div>
        </div>
      </div>
    );
  }
}

var styles = {
  base: {
    height: 52,
    maxWidth: 720,
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
    borderTop: '1px solid #dddddd',
    borderLeft: '1px solid #dddddd',
    borderRight: '1px solid #dddddd',
    margin: '0 auto',
    fontFamily: 'medium-content-sans-serif-font', 
    color: '#333333',
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'flex-end',
  },
  seperator: {
    height: 30,
    margin: '0 10px',
    borderLeft: '1px solid #cccccc',
  },
  leftIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
}

export default Radium(ProjectUpdateFooterBar);