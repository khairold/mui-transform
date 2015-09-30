import React, { Component, PropTypes } from 'react';

import ProjectTitle from './ProjectTitle';
import ProjectSubTitle from './ProjectSubTitle';
import ProjectRagStatus from './ProjectRagStatus';

import GreyedText from './GreyedText';

import { FontIcon, IconButton, IconMenu} from 'material-ui';

let Menu = require('material-ui/lib/menus/menu');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');

class ProjectRagBox extends Component {
  render() {
    const { ocm, dateUpdated, rag } = this.props;
    let h = <IconButton iconClassName="material-icons" color={'#8f8f8f'} style={{margin: '0 8px', fontSize:16}} >history</IconButton>;
    return (
      <div style={styles.base}>
        <ProjectRagStatus rag={rag} />
        <div>
          <GreyedText brightness={'darkest'} size={'small'} style={{marginLeft: 12}} block={true} bold={true} >{ocm}</GreyedText>
          <div style={styles.dateHistory} >
            <GreyedText brightness={'darkest'} size={'small'} style={{marginLeft: 12}} block={true} >{dateUpdated}</GreyedText>



          </div>
        </div>
        
      </div>
    );
  }
}

var styles = {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    padding: '0px 0 0 0',
    margin: '0px auto',
  },
  dateHistory: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
  }
}

export default ProjectRagBox;