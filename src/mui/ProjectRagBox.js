import React, { Component, PropTypes } from 'react';

import ProjectTitle from './ProjectTitle';
import ProjectSubTitle from './ProjectSubTitle';
import ProjectRagStatus from './ProjectRagStatus';
import GreyedText from './GreyedText';

class ProjectRagBox extends Component {
  render() {
    const { ocm, dateUpdated, rag } = this.props;
    return (
      <div style={styles.base}>
        <ProjectRagStatus rag={rag} />
        <div>
          <GreyedText brightness={'darkest'} size={'small'} style={{marginLeft: 12}} block={true} bold={true} >{ocm}</GreyedText>
          <GreyedText brightness={'darkest'} size={'small'} style={{marginLeft: 12}} block={true} >{dateUpdated}</GreyedText>
        </div>
      </div>
    );
  }
}

var styles = {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    padding: '16px 0px',
    margin: '12px auto',
  },
}

export default ProjectRagBox;