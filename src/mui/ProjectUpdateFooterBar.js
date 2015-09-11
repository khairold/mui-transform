import React, { Component, PropTypes } from 'react';
import { FontIcon } from 'material-ui';
import ProjectBookmark from './ProjectBookmark';
import GreyedText from './GreyedText';

class ProjectUpdateFooterBar extends Component {
  render() {
  	const { bookMarked, topPeople } = this.props;
    return (
      <div style={{position: 'fixed', zIndex: 1, bottom: 0, width: '100%'}}>
        <div style={styles.base}>
          <div>
            <FontIcon className="material-icons" color={'#8f8f8f'} style={{margin: '0 8px'}} >info_outline</FontIcon>
            <FontIcon className="material-icons" color={'#8f8f8f'} style={{margin: '0 8px'}} >people_outline</FontIcon>
            <FontIcon className="material-icons" color={'#8f8f8f'} style={{margin: '0 8px'}} >history</FontIcon>          
            <FontIcon className="material-icons" color={'#8f8f8f'} style={{margin: '0 8px'}} >chat_bubble_outline</FontIcon>
          </div>
          <div style={styles.right} >
            <ProjectBookmark bookMarked={bookMarked} style={{margin: '0 8px'}} />
            <div style={styles.seperator} />
            <GreyedText size={'medium'} >{topPeople}</GreyedText>
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
    backgroundColor: '#ededed',
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