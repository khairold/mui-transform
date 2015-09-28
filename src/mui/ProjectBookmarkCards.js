import React, { Component, PropTypes } from 'react';

import ProjectCard from './ProjectCard';

class ProjectBookmarkCards extends Component {
  render() {
  	const { projectCardsData } = this.props;

    let projectCardNodes = projectCardsData.map(function(projectCardData){
      return (
        <ProjectCard {...projectCardData} />
      );
    });

    return (
      <div style={styles.container} >
        {projectCardNodes}
      </div>

    );
  }
}

const styles = {
  container: {
    
  }
}

export default ProjectBookmarkCards;