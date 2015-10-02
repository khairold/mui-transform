import React, { Component, PropTypes } from 'react';
import { TextField, FlatButton, RaisedButton } from 'material-ui';

import PeopleAvatarName from './PeopleAvatarName';
import ProjectUpdateText from './ProjectUpdateText';
import GreyedText from './GreyedText';

class ProjectResponseInput extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.showReponseField = this.showReponseField.bind(this);
    this.blurReponseField = this.blurReponseField.bind(this);
    this.hideResponseField = this.hideResponseField.bind(this);
    this.focusResponseField = this.focusResponseField.bind(this);
    this.handleResponseTextChange = this.handleResponseTextChange.bind(this);
    this.state = {focusingResponseText: false, bluringResponseText: false, showReponseText: false, showName: null, reponseText: null, displayResponseText:{display: 'none'} };
  }
  handleClick() {
    if (!this.state.showReponseText) {
      this.showReponseField();
    }
  }
  showReponseField() {
    this.setState({showReponseText: true, showName: 'Ali', displayResponseText: {visibility: 'hidden'} });
    setTimeout(()=>{this.refs.responseField.setValue(null);},1);
    setTimeout(()=>{this.setState({displayResponseText: {visibility: true}}); },100);
    setTimeout(()=>{this.focusResponseField()},500);

  }
  focusResponseField() {
    this.setState({focusingResponseText: true});
    this.refs.responseField.focus(); 
    // setTimeout(()=>{this.refs.responseField.setValue(null);},1);
  }
  blurReponseField() {
    this.setState({bluringResponseText: true});
    if (this.refs.responseField.getValue() == ''){
      this.hideResponseField();
      this.setState({bluringResponseText: false});
    } else {
      this.setState({bluringResponseText: false});
    }
  }
  hideResponseField() {
    this.setState({focusingResponseText: false, showReponseText: false, showName: null, displayResponseText:{display: 'none'}});
  }
  handleResponseTextChange(e) {
    this.setState({reponseText: e.target.value});
  }
  render() {  
    const { name, image } = this.props;
    const { showReponseText, showName, reponseText, displayResponseText } = this.state;
    const writeReponseCallText = <span style={styles.reponseCall} >Write a response...</span>;

    return (
      <div style={styles.container} >
        <div style={styles.responseBox} >
          <div style={styles.innerReponseAvatarBox} onClick={this.handleClick} >
            <PeopleAvatarName name={showName && name} image={image} />
            {!showReponseText && writeReponseCallText}
          </div>
          <div style={{...displayResponseText}}>
            <TextField onChange={this.handleResponseTextChange} onBlur={this.blurReponseField} ref="responseField" style={{...styles.reponseText}} multiLine={false} fullWidth={true} underlineFocusStyle={{borderColor: '#999999', borderWidth: 1}} />
            <div style={styles.floatRight} ><FlatButton style={{border: '1px solid #dedede'}} label="submit" /></div>
          </div>
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
  responseBox: {
    borderTop: '1px solid #ededed',
    margin: '30px 0 80px 0',
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
    color: '#cccccc',
    marginLeft: 0
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
  }
}

export default ProjectResponseInput;