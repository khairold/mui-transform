import React, { Component, PropTypes } from 'react';
import mui, {Card} from 'material-ui';

import ProjectCardText from './ProjectCardText';
import ProjectCardTitle from './ProjectCardTitle';
import ProjectCardFooter from './ProjectCardFooter';
import ProjectCardHeader from './ProjectCardHeader';

class ProjectCard extends Component {
	render() {
		// const { updaterName } = this.props;
		// const { updaterName, updaterImage, lastUpdatedAgo, projectTitle, projectSubtitle, projectText, projectRagStatus, projectToGo } = projectCardData;
		const { updaterName, updaterImage, lastUpdatedAgo, projectTitle, projectSubtitle, projectText, projectRagStatus, projectToGo, projectBookmark, projectTopPeople } = this.props;

		return (
			<div style={styles.base}>
				<Card>
					<ProjectCardHeader updaterName={updaterName} updaterImage={updaterImage} lastUpdatedAgo={lastUpdatedAgo} />
					<ProjectCardTitle title={projectTitle} subtitle={projectSubtitle} />
					<ProjectCardText>
						{projectText}
					</ProjectCardText>
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
