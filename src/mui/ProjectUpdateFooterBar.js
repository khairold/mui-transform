import React, { Component, PropTypes } from 'react';
import { FontIcon, IconMenu, MenuItem, IconButton } from 'material-ui';
import ProjectBookmark from './ProjectBookmark';
import GreyedText from './GreyedText';
import ProjectUpdateHistoryIcon from './ProjectUpdateHistoryIcon';
import ProjectBookmarkIcon from './ProjectBookmarkIcon';

class ProjectFooterIcon extends Component {
  render() {
    const { url, iconType } = this.props;
    return (
      <a href="/">
        <FontIcon className="material-icons" color={'#8f8f8f'} style={{margin: '0 8px'}} >info_outline</FontIcon>
      </a>
    );
  }
}

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
      <span>
        {icon}
      </span>
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
      <span>
        {icon}
      </span>
    );
  }
}

class ProjectUpdateFooterBar extends Component {
  render() {
  	const { activeProjectSubPage, bookMarked, topPeople, toGo } = this.props;

    let bB = <IconButton iconClassName="material-icons" tooltipPosition="bottom-center" tooltip="Sky">settings_system_daydream</IconButton>;

    return (
      <div style={{position: 'fixed', zIndex: 1, bottom: 0, width: '100%'}}>
        <div style={styles.base}>
          <div style={styles.leftIcons}>
            <ProjectInfoIcon activeProjectSubPage={activeProjectSubPage} />
            <ProjectPeopleIcon activeProjectSubPage={activeProjectSubPage} />

            <IconButton iconStyle={{color:'#8f8f8f'}} iconClassName="material-icons" tooltipPosition="top-left" tooltip="discussons">chat_bubble_outline</IconButton>
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
    // position: 'absolute',
    // bottom: 0,
    // right: 0
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

export default ProjectUpdateFooterBar;