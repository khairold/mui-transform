import React, { Component, PropTypes } from 'react';

import ProjectTitleSmallBar from './ProjectTitleSmallBar';
import ProjectUpdateQuote from './ProjectUpdateQuote';
import ProjectUpdateText from './ProjectUpdateText';
import ProjectUpdateFooterBar from './ProjectUpdateFooterBar';


class ProjectUpdate extends Component {
  render() {  
    const { updaterName, updaterImage, lastUpdatedAgo, projectTopPeople, projectBookmark, projectUpdateQuote, projectUpdateText, projectTitle, projectSubtitle, projectUpdateOcm, projectUpdateDate, projectRagStatus, projectToGo } = this.props;
    
    return (
      <div>
        <ProjectTitleSmallBar title={projectTitle} subtitle={projectSubtitle} ocm={projectUpdateOcm} dateUpdated={projectUpdateDate} rag={projectRagStatus} container={styles.container} />
        <ProjectUpdateQuote container={styles.container} updaterName={updaterName} updaterImage={updaterImage} lastUpdatedAgo={lastUpdatedAgo} projectUpdateQuote={projectUpdateQuote} />
        <ProjectUpdateText container={styles.container} projectUpdateText={projectUpdateText} />
        <ProjectUpdateFooterBar bookMarked={projectBookmark} topPeople={projectTopPeople} toGo={projectToGo} />
      </div>
    );
  }
}

var styles = {
  container: {
    fontFamily: 'medium-content-sans-serif-font', 
    maxWidth: 720,
    padding: '0 10px',
    margin: '0 auto',
    display: 'block'
  }
}

export default ProjectUpdate;