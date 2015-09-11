import React, { Component, PropTypes } from 'react';
import mui, { CardText, FontIcon} from 'material-ui';

import GreyedText from './GreyedText';
import ProjectRagStatus from './ProjectRagStatus';
import ProjectBookmark from './ProjectBookmark';

class ProjectCardFooter extends Component {
  render() {
    const { rag, toGo, bookMark, people } = this.props;
    return (
			<CardText>
				<div style={styles.footerOut}>
					<div style={styles.footerIn}>
						<ProjectRagStatus rag={rag} style={{marginRight: 8}} />
						<GreyedText size={'medium'} brightness={'darker'} >{toGo}</GreyedText>
						<ProjectBookmark bookMarked={bookMark} style={{marginLeft: 8}} />
					</div>
					<div>
						<GreyedText>{people}</GreyedText> 
					</div>
				</div>
			</CardText>
    );
  }
}

var styles = {
	base: {
		paddingBottom: 0
	},
	footerOut: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderTop: '1px solid #f9f9f9',
		paddingTop: 12
	},
	footerIn: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	}
}

export default ProjectCardFooter;