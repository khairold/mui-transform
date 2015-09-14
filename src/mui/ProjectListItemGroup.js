import React, { Component, PropTypes } from 'react';

import { List, ListItem, ListDivider } from 'material-ui';

import ProjectRagStatus from './ProjectRagStatus';
import ProjectTitle from './ProjectTitle';
import GreyedText from './GreyedText';

import ProjectListItem from './ProjectListItem';

class ProjectListItemGroup extends Component {
  render() {
  	const { projectListItemsData, status } = this.props;

    let listItemCountBorder = false;
    let itemBorder;

    let projectListItemNodes = projectListItemsData.filter(function(projectListItemData){
      return projectListItemData.status == status;
    }).map(function(projectListItemData){
 
      if (listItemCountBorder) {
        itemBorder = <ListDivider inset={true} />;
      } else {
        listItemCountBorder = true;
      }

      return (
        <div>
          {itemBorder}
          <ProjectListItem {...projectListItemData} />
        </div>
      );
    });

    return (
      <List style={styles.list} subheader={status} >
        {projectListItemNodes}
      </List>
    );
  }
}

var styles = {
  list: {
    fontFamily: 'medium-content-sans-serif-font', 
    color: '#333333'
  }
}

export default ProjectListItemGroup;