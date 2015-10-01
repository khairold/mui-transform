import React, { Component, PropTypes } from 'react';
import mui, {Card, CardText, FontIcon } from 'material-ui';

import ProjectCardText from './ProjectCardText';
import ProjectCardTitle from './ProjectCardTitle';
import ProjectCardFooter from './ProjectCardFooter';
import ProjectFooter from './ProjectFooter';
import ProjectCardUpdater from './ProjectCardUpdater';
import ProjectTitleSmallBar from './ProjectTitleSmallBar';

class ProjectCard extends Component {
	render() {
		const { updaterName, updaterImage, lastUpdatedAgo, projectTitle, projectSubtitle, projectText, projectRagStatus, projectToGo, projectBookmark, projectTopPeople } = this.props;
		return (
			<div style={styles.base}>
				<Card>
					<CardText>
						<ProjectTitleSmallBar noHistory={true} title={'Hello'} subtitle={'This is the Call'} rag={'green'} ocm={'MOM #21'} dateUpdated={'Jan 21st, 2015'} />
					</CardText>
					<ProjectCardText>
						{projectText}
					</ProjectCardText>
					<ProjectCardUpdater updaterName={updaterName} updaterImage={updaterImage} lastUpdatedAgo={lastUpdatedAgo} />
					
					<ProjectFooter bookMarked={projectBookmark} topPeople={projectTopPeople} toGo={projectToGo} card={true} />
				</Card>
			</div>
		);
	}
}

var styles = {
	base: {
		maxWidth:580, 
		margin:'30 auto'
	}
};

export default ProjectCard; 
