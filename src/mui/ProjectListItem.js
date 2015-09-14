import React, { Component, PropTypes } from 'react';

import { ListItem, ListDivider, IconButton } from 'material-ui';

import ProjectRagStatus from './ProjectRagStatus';
import ProjectTitle from './ProjectTitle';
import GreyedText from './GreyedText';

class ProjectListItem extends Component {
  render() {
  	const { rag, title, bookMarked, excerpt } = this.props;
    let bookmark = (bookMarked) ? 'bookmark' : 'bookmark_outline';
    let tip = (bookMarked) ? 'remove bookmark' : 'bookmark this';

    return (
      <div >
            
            <ListItem
              leftAvatar={<ProjectRagStatus rag={rag} size={'list'} />}
              primaryText={<ProjectTitle size={'list'}>{title}</ProjectTitle>} 
              secondaryText={
                <GreyedText size={'list'}>
                  {excerpt}
                </GreyedText>
              } 
              rightIconButton={ <IconButton iconClassName="material-icons" iconStyle={{color:'#8f8f8f'}} tooltipPosition="bottom-center" tooltip={tip} >{bookmark}</IconButton>}
              secondaryTextLines={2}  disabled={false} />   
              {/*<ListDivider inset={true} />  */}
      </div>
    );
  }
}


export default ProjectListItem;