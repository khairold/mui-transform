import React, { Component, PropTypes } from 'react';
import mui, {Avatar, CardText, FontIcon} from 'material-ui';

import PeopleName from './PeopleName';
import PeopleAvatarName from './PeopleAvatarName';


class ProjectCardHeader extends Component {
  render() {
    const { updaterName, updaterImage, lastUpdatedAgo } = this.props;
    return (
			<CardText>
				<div style={styles.base} >
					<PeopleAvatarName name={updaterName} image={updaterImage} sub={lastUpdatedAgo} />
				</div>
			</CardText>
    );
  }
}

let styles = {
	base: {
	    display: 'flex',
	    flexDirection: 'row',
	    justifyContent: 'flex-end',
	    alignItems: 'center',
	    paddingRight: 62
	}
}

export default ProjectCardHeader;