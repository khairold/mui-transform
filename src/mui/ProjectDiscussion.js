import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';

import PeopleAvatarName from './PeopleAvatarName';
import ProjectUpdateText from './ProjectUpdateText';

class ProjectDiscussion extends Component {
  constryc
  handleClick() {

  }
  render() {  
    const { name, image, timeAgo, discussionText } = this.props;
    
    let showReponseText = false;
    const textField = <TextField style={styles.reponseText} multiLine={true} fullWidth={true} underlineFocusStyle={{borderColor: '#999999', borderWidth: 1}} />;

    return (
      <div style={styles.container} >
        <div style={styles.inner} onClick={this.handleClick} >
          <PeopleAvatarName name={name} image={image} sub={timeAgo} />
          <ProjectUpdateText discussion={true} projectUpdateText={discussionText} />
          <div style={{borderTop: '1px solid #ededed'}} />
        </div>

        <div style={styles.innerReponse} >
          <PeopleAvatarName name={''} image={image} />
          <span style={styles.reponseCall} >Write a response...</span>
        </div>
        <div>
          {showReponseText && textField}
        </div>

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
  inner: {
    padding: '40px 0 0px 0'
  },
  innerReponse: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  reponseCall: {
    fontFamily: 'medium-content-serif-font, Georgia, Cambria, Times, serif',
    fontSize: 18,
    color: '#8e8e8e',
    marginLeft: 8
  },
  reponseText: {
    margin: '20 0',
    fontFamily: 'medium-content-serif-font, Georgia, Cambria, Times, serif',
    fontSize: 18,
  }
}

export default ProjectDiscussion;