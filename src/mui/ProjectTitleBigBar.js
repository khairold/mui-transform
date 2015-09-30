import React, { Component, PropTypes } from 'react';

import ProjectTitle from './ProjectTitle';
import ProjectSubTitle from './ProjectSubTitle';
import GreyedText from './GreyedText';

class ProjectTitleBigBar extends Component {
  render() {
    const { title, subtitle, container, topPeople } = this.props;
    return (
	    <div style={{backgroundColor: 'rgba(0,0,0,0.8)', padding: '60px 0'}} >
	      <div style={container} >
	        <ProjectTitle size={'large'} invert={true} >{title}</ProjectTitle>
	        <ProjectSubTitle size={'large'} invert={true} >{subtitle}</ProjectSubTitle>
	      </div>
	      <div style={{...container, ...styles.topPeople }} >
	      	{/*<GreyedText size={'medium'} brightness={'almostWhite'} >{topPeople}</GreyedText>*/}
	      	<div style={{margin: '20px 40px 0 0'}}>
	      		
	      		<GreyedText size={'medium'} brightness={'almostWhite'} >{topPeople}</GreyedText>
	      	</div>
	      </div>
	    </div>

    );
  }
}

let styles = {
	topPeople: {
		display: 'flex',
		justifyContent: 'flex-end',
		// margin: '20px 10px 0 0'
	}
}

export default ProjectTitleBigBar;