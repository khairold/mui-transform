import React, { Component, PropTypes } from 'react';

import ProjectListItemGroup from './ProjectListItemGroup';

class ProjectList extends Component {
  render() {
  	const { projectStatusOptions , projectListItemsData } = this.props;

    let projectGroupNodes = projectStatusOptions.map(function (projectStatus) {

      let projectFiltered = projectListItemsData.filter(function(projectListItemData){
        return projectListItemData.status == projectStatus;
      });

      if (projectFiltered.length) {
        return <ProjectListItemGroup projectListItemsData={projectFiltered} status={projectStatus} />;
      } else {
        return;
      }
    
    });

    return (
      <div style={styles.container} >
        {projectGroupNodes}
      </div>

    );
  }
}

const styles = {
  container: {
    fontFamily: 'medium-content-sans-serif-font', 
    maxWidth: 580,
    padding: '0 10px',
    margin: '0 auto',
    display: 'block'
  }
}

export default ProjectList;