import React, { Component, PropTypes } from 'react';

import { List, ListItem, ListDivider, Avatar, FontIcon, IconButton } from 'material-ui';
import PeopleAvatar from './PeopleAvatar';
import PeopleName from './PeopleName';
import GreyedText from './GreyedText';

import ProjectRagStatus from './ProjectRagStatus';
import ProjectTitle from './ProjectTitle';
import ProjectBookmark from './ProjectBookmark';

class ProjectList extends Component {
  render() {
  	const { image, name, role } = this.props;
    return (
      <div style={styles.container} >
        <ProjectBookmark bookMarked = {false} />

        <IconButton iconClassName="material-icons">bookmark</IconButton>

          <List style={styles.list} subheader="Today">
            <ListItem
              innerStyle={styles.list} 
              innerDivStyle={styles.list} 
              leftAvatar={<Avatar src="images/ok-128.jpg" />}
              primaryText={<ProjectTitle size={'list'}>Lala</ProjectTitle>} 
               />
            <ListDivider inset={true} />
            <ListItem
              leftAvatar={<ProjectRagStatus rag={'green'} size={'lislt'} />}
              primaryText={<ProjectTitle size={'list'}>Pangkor</ProjectTitle>} 
              secondaryText={
                <GreyedText size={'list'}>
                  Wish I could come, but I&apos;m out of town this weekend. There's so much more to tell you but I just don't have the time
                </GreyedText>
              } 
              secondaryTextLines={2} 
              rightIconButton={<ProjectBookmark bookMarked = {true} />} />
              haha
          </List>
        
      </div>
    );
  }
}

var styles = {
  container: {
    fontFamily: 'medium-content-sans-serif-font', 
    maxWidth: 580,
    padding: '0 10px',
    margin: '0 auto',
    display: 'block'
  },
  list: {
    fontFamily: 'medium-content-sans-serif-font', 
    color: '#333333'
  },
  listP: {
    fontFamily: 'medium-content-sans-serif-font', 
    fontSize: 14, 
    color: '#777777'
  }
}

export default ProjectList;