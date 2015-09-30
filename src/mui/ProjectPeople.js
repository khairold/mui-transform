import React, { Component, PropTypes } from 'react';

import ProjectTitleSmallBar from './ProjectTitleSmallBar';
import ProjectBlackBar from './ProjectBlackBar';
import ProjectUpdateText from './ProjectUpdateText';
import ProjectUpdateFooterBar from './ProjectUpdateFooterBar';
import PeopleCard from './PeopleCard';


import { Paper } from 'material-ui';
import PeopleAvatar from './PeopleAvatar';
import PeopleName from './PeopleName';
import GreyedText from './GreyedText';


class ProjectPeople extends Component {
  render() {  
    const { projectPeople, updaterName, updaterImage, lastUpdatedAgo, projectTopPeople, projectBookmark, projectUpdateQuote, projectUpdateText, projectTitle, projectSubtitle, projectUpdateOcm, projectUpdateDate, projectRagStatus } = this.props;
    
    let peopleCardNodes = projectPeople.map(function(peopleCardData){
      return (
        <PeopleCard {...peopleCardData} />
      );
    });

    return (
      <div>
        <ProjectTitleSmallBar tab={true} title={projectTitle} subtitle={projectSubtitle} ocm={projectUpdateOcm} dateUpdated={projectUpdateDate} rag={projectRagStatus} container={styles.container} />
        <ProjectBlackBar container={styles.container} projectUpdateQuote={"These people, they work 8 days a week ..."} />
        <div style={styles.container}>
          <div style={styles.cardsContainer} >
            {peopleCardNodes}
          </div>
        </div>
        <ProjectUpdateFooterBar bookMarked={projectBookmark} topPeople={projectTopPeople} />
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
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '22px 0 40px 0'
  }
}

export default ProjectPeople;