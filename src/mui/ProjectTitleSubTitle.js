import React, { Component, PropTypes } from 'react';

import ProjectTitle from './ProjectTitle';
import ProjectSubTitle from './ProjectSubTitle';

class ProjectTitleSubTitle extends Component {
  render() {
  	const { title, subtitle, size, invert } = this.props;
    return (
      <div>
        <ProjectTitle size={size}>{title}</ProjectTitle>
        <ProjectSubTitle size={size} >{subtitle}</ProjectSubTitle>
      </div>
    );
  }
}

export default ProjectTitleSubTitle; 