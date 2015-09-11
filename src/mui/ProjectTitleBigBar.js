import React, { Component, PropTypes } from 'react';

import ProjectTitle from './ProjectTitle';
import ProjectSubTitle from './ProjectSubTitle';

class ProjectTitleBigBar extends Component {
  render() {
    const { title, subtitle, container } = this.props;
    return (
	    <div style={{backgroundColor: 'rgba(0,0,0,0.8)', padding: '60px 0'}} >
	      <div style={container} >
	        <ProjectTitle size={'large'} invert={true} >{title}</ProjectTitle>
	        <ProjectSubTitle size={'large'} invert={true} >{subtitle}</ProjectSubTitle>
	      </div>
	    </div>

    );
  }
}

export default ProjectTitleBigBar;