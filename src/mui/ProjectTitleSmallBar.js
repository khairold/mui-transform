import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';

import ProjectTitleSubTitle from './ProjectTitleSubTitle';
import ProjectRagStatus from './ProjectRagStatus';
import ProjectRagBox from './ProjectRagBox';
import GreyedText from './GreyedText';
import ProjectBookmark from './ProjectBookmark';
import ProjectTab from './ProjectTab';
import ProjectUpdateHistoryIcon from './ProjectUpdateHistoryIcon';

class ProjectTitleSmallBar extends Component {
  handleTabLeave(){
    console.log('tab is left');
  }
  render() {
    const { tab, noTitle, title, subtitle, container, ocm, dateUpdated, rag, size, currentUpdate } = this.props;

    let titleBlock;
    let tabMarginTop;

    if (!noTitle) {
      titleBlock = <ProjectTitleSubTitle title={title} subtitle={subtitle} inline={false} size={'card'} />;
      tabMarginTop = '52px ';
    } else {
      tabMarginTop = '10px ';
    }

    let tabNames = ['info','people','discussions','latest'];
    let tabNode = tab ? <div style={{padding:'0px 0', margin: tabMarginTop + ' 0 40px 0' }}><ProjectTab activeTab={'info'} tabNames={tabNames} /></div> : null;

    let statusText = currentUpdate ? 'current status' : 'historical status';

    return (
        <div style={container} >
          <div style={styles.base} >
            <div>
              {titleBlock}
              <div><Waypoint onLeave={this.handleTabLeave} threshold={0.0} /></div>
              {tabNode}
            </div>
            <div>
              <div>
                <ProjectRagBox ocm={ocm} dateUpdated={dateUpdated} rag={rag} />
              </div>
              <div>
                <ProjectUpdateHistoryIcon size={'small'} />
                <GreyedText style={{fontStyle: 'normal', position: 'relative', left: -12, top: -12}} >{statusText}</GreyedText>
              </div>
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
    // alignItems: 'center', 
    justifyContent: 'space-between',
    padding: '0px 0px',
    margin: '0px auto',
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex'
  }
}

export default ProjectTitleSmallBar;

        // <div style={container} >
        //   <div style={styles.base} >
        //     {titleBlock}
        //     <div>
        //       <ProjectRagBox ocm={ocm} dateUpdated={dateUpdated} rag={rag} />
        //     </div>
        //   </div>
        // </div>