import React, { Component, PropTypes } from 'react';
import { FontIcon, IconMenu, MenuItem, IconButton } from 'material-ui';
import ProjectBookmark from './ProjectBookmark';
import GreyedText from './GreyedText';
import ProjectHistoryIcon from './ProjectHistoryIcon';

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

class ProjectUpdateFooterBar extends Component {
  render() {
  	const { bookMarked, topPeople, toGo } = this.props;

    let bB = <IconButton iconClassName="material-icons" tooltipPosition="bottom-center" tooltip="Sky">settings_system_daydream</IconButton>;

    return (
      <div style={{position: 'fixed', zIndex: 1, bottom: 0, width: '100%'}}>
        <div style={styles.base}>
          <div>
            <IconButton iconStyle={{color:'#8f8f8f'}} iconClassName="material-icons" tooltipPosition="top-left" tooltip="info">info_outline</IconButton>
            <IconButton iconStyle={{color:'#8f8f8f'}} iconClassName="material-icons" tooltipPosition="top-left" tooltip="people">people_outline</IconButton>
            <IconButton iconStyle={{color:'#8f8f8f'}} iconClassName="material-icons" tooltipPosition="top-left" tooltip="discussons">chat_bubble_outline</IconButton>
            <ProjectHistoryIcon />
          </div>
          <div style={styles.right} >
            <GreyedText style={{fontStyle: 'italic', marginLeft: 20}} brightness={'darker'} size={'medium'} >{toGo}</GreyedText> 
            <ProjectBookmark bookMarked={bookMarked} style={{margin: '0 8px'}} />
          </div>
        </div>
      </div>
    );
  }
}

var styles = {
  base: {
    height: 52,
    maxWidth: 740,
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
}

export default ProjectUpdateFooterBar;