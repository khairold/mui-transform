import React, { Component, PropTypes } from 'react'; 

import { ListItem, ListDivider, IconButton } from 'material-ui';

import ProjectRagStatus from './ProjectRagStatus';
import ProjectTitle from './ProjectTitle';
import GreyedText from './GreyedText';
import ProjectBookmarkIcon from './ProjectBookmarkIcon';

class ProjectListItem extends Component {
  render() {
  	const { rag, title, bookMarked, excerpt, lastUpdatedAgo } = this.props;
    let bookmark = (bookMarked) ? 'bookmark' : 'bookmark_outline';
    let tip = (bookMarked) ? 'remove bookmark' : 'bookmark this';
    // let icon = <IconButton iconClassName="material-icons" iconStyle={{color:'#acacac'}} tooltipPosition="bottom-left" tooltip={tip} >{bookmark}</IconButton>;
    // let icon = <ProjectBookmarkIcon bookMarked={bookMarked} style={{margin: '0 8px'}} />;
    // icon = String(icon);
    let icon = <IconButton iconStyle={{color:'#8f8f8f'}} iconClassName="material-icons" tooltipPosition="top-left" tooltip="bookmark">{bookmark}</IconButton>;

    return (
      <div >
            
            <ListItem
              leftAvatar={<ProjectRagStatus rag={rag} size={'list'} />}
            primaryText={<span><span>{title}</span><GreyedText italic={true}>- {lastUpdatedAgo}</GreyedText></span> } 
              secondaryText={
                
                  <p>{excerpt}</p> 
                
              } 
              rightIconButton={icon}
              secondaryTextLines={1}  disabled={false} />   
              {/*<ListDivider inset={true} />  */}
      </div>
    );
  }
}


export default ProjectListItem;

