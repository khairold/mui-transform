import React, { Component, PropTypes } from 'react';
import { TextField, FlatButton } from 'material-ui';

import PeopleAvatarName from './PeopleAvatarName';
import ProjectUpdateText from './ProjectUpdateText';
import GreyedText from './GreyedText';

class ProjectDiscussion extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.showReponseField = this.showReponseField.bind(this);
    this.hideResponseField = this.hideResponseField.bind(this);
    this.focusResponseField = this.focusResponseField.bind(this);
    this.handleResponseTextChange = this.handleResponseTextChange.bind(this);
    this.state = {showReponseText: false, showName: null, reponseText: null, displayResponseText:{display: 'none'} };
  }
  handleClick() {
    this.showReponseField();
  }
  showReponseField() {
    this.setState({showReponseText: true, showName: 'Ali', displayResponseText: {visibility: 'hidden'} });
    setTimeout(()=>{this.refs.responseField.setValue(null);},1);
    setTimeout(()=>{this.setState({displayResponseText: {visibility: true}}); },100);
    setTimeout(()=>{this.focusResponseField()},100);

  }
  focusResponseField() {

    this.refs.responseField.focus(); 
    // setTimeout(()=>{this.refs.responseField.setValue(null);},1);
  }
  hideResponseField() {
    if (this.refs.responseField.getValue() == '') {
      this.setState({showReponseText: false, showName: null, displayResponseText:{display: 'none'}});
    }
  }
  handleResponseTextChange(e) {
    this.setState({reponseText: e.target.value});
  }
  render() {  
    const { name, image, timeAgo, discussionText } = this.props;
    const { showReponseText, showName, reponseText, displayResponseText } = this.state;
    
    const writeReponseCallText = <span style={styles.reponseCall} >Write a response...</span>;
    // const textField = </div>;

    let userName = 'Lily';

    return (
      <div style={styles.container} >
        <div style={styles.responseBox} >
          <div style={styles.innerReponseAvatarBox} onClick={this.handleClick} >
            <PeopleAvatarName name={showName && userName} image={image} />
            {!showReponseText && writeReponseCallText}
          </div>
          <div style={{...displayResponseText}}>
            <TextField onChange={this.handleResponseTextChange} onBlur={this.hideResponseField} ref="responseField" style={{...styles.reponseText}} multiLine={false} fullWidth={true} underlineFocusStyle={{borderColor: '#999999', borderWidth: 1}} />
            <div style={styles.floatRight} ><FlatButton label="submit" /></div>
          </div>
        </div>


        <div style={styles.inner} >
          <div style={styles.reponseHeader}>OTHER RESPONSES</div>
          <PeopleAvatarName name={name} image={image} sub={timeAgo} />
          <ProjectUpdateText discussion={true} projectUpdateText={discussionText} />
          <div style={{borderTop: '1px solid #ededed'}} />
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
  reponseHeader: {
    fontFamily: 'medium-content-sans-serif-font', 
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.1,
    color: '#333333',
    textDecoration: 'none',
    margin: '0 20px 40px 0',
    padding: '16px 0 8px 0',
    borderBottom: '1px solid #ededed',
  },
  responseBox: {
    margin: '30px 0 30px 0'
  },
  inner: {
    padding: '40px 0 0px 0'
  },
  innerReponseAvatarBox: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    margin: '30px 0 10px 0',
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
    height: 48
  },
  floatRight: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'flex'
  }
}

export default ProjectDiscussion;