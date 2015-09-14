import React, { Component, PropTypes } from 'react';
import mui, {Card, CardText, FontIcon } from 'material-ui';

import ProjectCardText from './ProjectCardText';
import ProjectCardTitle from './ProjectCardTitle';
import ProjectCardFooter from './ProjectCardFooter';
import ProjectCardHeader from './ProjectCardHeader';

import ProjectTitleSmallBar from './ProjectTitleSmallBar';

class ProjectCard extends Component {
	render() {
		// const { updaterName } = this.props;
		// const { updaterName, updaterImage, lastUpdatedAgo, projectTitle, projectSubtitle, projectText, projectRagStatus, projectToGo } = projectCardData;
		const { updaterName, updaterImage, lastUpdatedAgo, projectTitle, projectSubtitle, projectText, projectRagStatus, projectToGo, projectBookmark, projectTopPeople } = this.props;

					// {<ProjectCardHeader updaterName={updaterName} updaterImage={updaterImage} lastUpdatedAgo={lastUpdatedAgo} />}
					// {<ProjectCardTitle title={projectTitle} subtitle={projectSubtitle} />}

		return (
			<div style={styles.base}>
				<Card>


					<CardText>
						<ProjectTitleSmallBar title={'Hello'} subtitle={'This is the Call'} rag={'green'} ocm={'OCM #21'} dateUpdated={'Jan 21st, 2015'} />
					</CardText>

					<ProjectCardText>
						{projectText}
					</ProjectCardText>


					<ProjectCardHeader updaterName={updaterName} updaterImage={updaterImage} lastUpdatedAgo={lastUpdatedAgo} />

					<ProjectCardFooter rag={projectRagStatus} toGo={projectToGo} bookMark={projectBookmark} people={projectTopPeople} />
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
