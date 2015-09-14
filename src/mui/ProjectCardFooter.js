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

					<div>
						<GreyedText size={'medium'} brightness={'darker'} >{toGo}</GreyedText>
						<FontIcon className="material-icons" color={'#8f8f8f'} style={{fontSize: 16, margin: '0 4px'}} >info_outline</FontIcon>
			            <FontIcon className="material-icons" color={'#8f8f8f'} style={{fontSize: 16, margin: '0 4px'}} >people_outline</FontIcon>
			            <FontIcon className="material-icons" color={'#8f8f8f'} style={{fontSize: 16, margin: '0 4px'}} >history</FontIcon>          
			            <FontIcon className="material-icons" color={'#8f8f8f'} style={{fontSize: 16, margin: '0 4px'}} >chat_bubble_outline</FontIcon>
					</div>
					<div style={styles.footerIn}>
						
						
						<ProjectBookmark bookMarked={bookMark} style={{marginLeft: 8}} />
						<div style={styles.seperator} />
						<GreyedText size={'medium'} >{people}</GreyedText> 
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
	},
	seperator: {
    height: 30,
    margin: '0 10px',
    borderLeft: '1px solid #cccccc',
  },
}

export default ProjectCardFooter;