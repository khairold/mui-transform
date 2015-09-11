import React, { Component, PropTypes } from 'react';

import ProjectTitleSubTitle from './ProjectTitleSubTitle';
import ProjectRagStatus from './ProjectRagStatus';
import ProjectRagBox from './ProjectRagBox';
import GreyedText from './GreyedText';

class ProjectTitleSmallBar extends Component {
  render() {
    const { noTitle, title, subtitle, container, ocm, dateUpdated, rag } = this.props;

    let titleBlock;
    if (!noTitle) {
      titleBlock = <ProjectTitleSubTitle title={title} subtitle={subtitle} size={'medium'} />;
    };

    return (
  			<div style={container} >
          <div style={styles.base} >
            {titleBlock}
            <div>
              <ProjectRagBox ocm={ocm} dateUpdated={dateUpdated} rag={rag} />
            </div>
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
    justifyContent: 'space-between',
    padding: '0px 0px',
    margin: '0px auto',
  },
}

export default ProjectTitleSmallBar;