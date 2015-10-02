import React, { Component, PropTypes } from 'react';
import { TextField, FlatButton, RaisedButton } from 'material-ui';

import PeopleAvatarName from './PeopleAvatarName';
import ProjectUpdateText from './ProjectUpdateText';
import GreyedText from './GreyedText';

class ProjectReponseListItem extends Component {
  render() {  
    const { name, image, timeAgo, discussionText } = this.props;
    return (
      <div style={styles.inner}>
        <PeopleAvatarName name={name} image={image} sub={timeAgo} />
        <ProjectUpdateText discussion={true} projectUpdateText={discussionText} />
        <div style={{borderTop: '1px solid #ededed'}} />
      </div>
    );
  }
}

class ProjectReponseList extends Component {
  render() {  
    const { projectResponseData } = this.props;

    let projectReponseListItemNodes = projectResponseData.map(function(projectReponseItemData){
      return (
        <ProjectReponseListItem {...projectReponseItemData} />
      )
    });

    return (
      <div style={styles.container} >
        <div>
          <div style={styles.reponseHeader}>OTHER RESPONSES</div>
          {projectReponseListItemNodes}
        </div>
      </div>
    );
  }
}

let styles = {
  container: {
    fontFamily: 'medium-content-sans-serif-font', 
    maxWidth: 720,
    padding: '0 10px',
    margin: '0 auto',
    display: 'block'
  },
  reponseHeader: {
    fontFamily: 'medium-content-sans-serif-font', 
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.1,
    color: '#333333',
    textDecoration: 'none',
    margin: '0 0px 20px 0',
    padding: '16px 0 8px 0',
    borderBottom: '1px solid #ededed',
  },
  inner: {
    padding: '40px 0 0px 0'
  },
}

export default ProjectReponseList;