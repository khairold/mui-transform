import React, { Component, PropTypes } from 'react';

import ProjectTitle from './ProjectTitle';
import ProjectSubTitle from './ProjectSubTitle';

import Radium from 'radium';

class ProjectTitleSubTitle extends Component {
  render() {
  	const { title, subtitle, size, invert, inline } = this.props;
    return (
      <div>
        <ProjectTitle size={size} inline={inline} >{title}</ProjectTitle>
        <ProjectSubTitle size={size} inline={inline} >{subtitle}</ProjectSubTitle>
      </div>
    );
  }
}

var styles = {
  inline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
	}
}
export default Radium(ProjectTitleSubTitle); 