import React, { Component, PropTypes } from 'react';
import mui, {Avatar, CardText, FontIcon} from 'material-ui';

import PeopleName from './PeopleName';
import PeopleAvatarName from './PeopleAvatarName';


class ProjectCardHeader extends Component {
  render() {
    const { updaterName, updaterImage, lastUpdatedAgo } = this.props;
    return (
			<CardText>
				<PeopleAvatarName name={updaterName} image={updaterImage} sub={lastUpdatedAgo} />
			</CardText>
    );
  }
}

export default ProjectCardHeader;