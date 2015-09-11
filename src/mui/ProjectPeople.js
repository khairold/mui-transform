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
    const { updaterName, updaterImage, lastUpdatedAgo, projectTopPeople, projectBookmark, projectUpdateQuote, projectUpdateText, projectTitle, projectSubtitle, projectUpdateOcm, projectUpdateDate, projectRagStatus } = dummyData;
    
    let peopleCardNodes = dummyData.projectPeople.map(function(peopleCardData){
      return (
        <PeopleCard {...peopleCardData} />
      );
    });

    return (
      <div>
        <ProjectTitleSmallBar title={projectTitle} subtitle={projectSubtitle} ocm={projectUpdateOcm} dateUpdated={projectUpdateDate} rag={projectRagStatus} container={styles.container} />
        <ProjectBlackBar container={styles.container} projectUpdateQuote={"It's been a hard day's night, and we've been working like a ..."} />
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

let dummyData = {
  updaterName: 'Hari Mata',
  updaterImage: 'images/people/s61455.jpg',
  lastUpdatedAgo: '2 days ago',
  projectTitle: 'Pangkor',
  projectSubtitle: 'King of POP',
  projectUpdateQuote: 'Project is doing good. Everything is on schedule. We all are working hard. 8 days a week.',
  projectUpdateText: 'Yes, each react component has state. State is something internal to the component. Only the component it self can read and write into its own state and as the name implies, the state of the component is used to store state (captain obvious here). Not interesting. Let’s move next.',
  projectRagStatus: 'green',
  projectToGo: '3 days to go',
  projectBookmark: false,
  projectTopPeople: 'Ali / Larter',
  projectUpdateOcm: 'OCM #19',
  projectUpdateDate: 'July 24th, 2015',
  projectPeople: [
    {
      name: 'Ali Larter',
      role: 'Sponsor',
      image: 'images/people/s61455.jpg',
    },
    {
      name: 'Ali Larter',
      role: 'Sponsor',
      image: 'images/people/s61455.jpg',
    },
    {
      name: 'Ali Larter',
      role: 'Sponsor',
      image: 'images/people/s61455.jpg',
    },
    {
      name: 'Ali Larter',
      role: 'Sponsor',
      image: 'images/people/s61455.jpg',
    }
  ]
};

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
    margin: '22px 0 0 0'
  }
}

export default ProjectPeople;