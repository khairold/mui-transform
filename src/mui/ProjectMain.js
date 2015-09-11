import React, { Component, PropTypes } from 'react';

import ProjectTitleSmallBar from './ProjectTitleSmallBar';
import ProjectTitleBigBar from './ProjectTitleBigBar';
import ProjectUpdateText from './ProjectUpdateText';
import ProjectUpdateFooterBar from './ProjectUpdateFooterBar';


class ProjectMain extends Component {
  render() {  
    const { updaterName, updaterImage, lastUpdatedAgo, projectTopPeople, projectBookmark, projectUpdateQuote, projectUpdateText, projectTitle, projectSubtitle, projectUpdateOcm, projectUpdateDate, projectRagStatus } = dummyData;
    return (
      <div>
        <ProjectTitleSmallBar noTitle={true} title={projectTitle} subtitle={projectSubtitle} ocm={projectUpdateOcm} dateUpdated={projectUpdateDate} rag={projectRagStatus} container={styles.container} />
        <ProjectTitleBigBar title={projectTitle} subtitle={projectSubtitle} ocm={projectUpdateOcm} dateUpdated={projectUpdateDate} rag={projectRagStatus} container={styles.container} />
        <ProjectUpdateText container={styles.container} projectUpdateText={projectUpdateText} />
        <ProjectUpdateFooterBar bookMarked={projectBookmark} topPeople={projectTopPeople} />
      </div>
    );
  }
}

let dummyData = {
  updaterName: 'Hari Mata',
  updaterImage: 'images/people/s61455.jpg',
  lastUpdatedAgo: '2 days ago',
  projectTitle: 'Pangkor',
  projectSubtitle: 'King of POP',
  projectUpdateQuote: 'Project is doing good. Everything is on schedule. We all are working hard. 8 days a week.',
  projectUpdateText: 'Yes, each react component has state. State is something internal to the component. Only the component itself can read and write into its own state and as the name implies, the state of the component is used to store state (captain obvious here). Not interesting. Let’s move next.',
  projectRagStatus: 'green',
  projectToGo: '3 days to go',
  projectBookmark: false,
  projectTopPeople: 'Ali / Larter',
  projectUpdateOcm: 'OCM #19',
  projectUpdateDate: 'July 24th, 2015'
};

var styles = {
  container: {
    fontFamily: 'medium-content-sans-serif-font', 
    maxWidth: 720,
    padding: '0 10px',
    margin: '0 auto',
    display: 'block'
  }
}

export default ProjectMain;