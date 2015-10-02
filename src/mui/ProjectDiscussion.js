import React, { Component, PropTypes } from 'react';

import ProjectResponseInput from './ProjectResponseInput';
import ProjectResponseList from './ProjectResponseList';

class ProjectDiscussion extends Component {
  render() {  
    const { projectDiscussionData } = this.props;
    return (
      <div>
        <ProjectResponseInput {...projectDiscussionData.user} />
        <ProjectResponseList  projectResponseData={projectDiscussionData.projectResponseData} />
      </div>
    );
  }
}

var styles = {
  container: {
    fontFamily: 'medium-content-sans-serif-font', 
    maxWidth: 720,
    padding: '0 10px',
    margin: '0 auto',
    display: 'block'
  },
}

export default ProjectDiscussion;