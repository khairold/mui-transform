import React, { Component, PropTypes } from 'react';
import { FlatButton, Paper, TextField } from 'material-ui';

class LoginBox extends Component {
  render() {  
    return (
      <div style={styles.base} >
        <Paper style={styles.box} >
  		    <div style={{textAlign: 'center', marginBottom: 28}} >
            <span style={styles.loginTitle} >GW Projects</span>
          </div>
          
            <TextField style={styles.textField} floatingLabelStyle={styles.floatingText} floatingLabelText="Staff ID" underlineFocusStyle={{borderColor: '#999999'}} />
            <TextField style={styles.textField} floatingLabelStyle={styles.floatingText} floatingLabelText="Password" underlineFocusStyle={{borderColor: '#999999'}} errorText={null} type="password" />
          
          <div style={styles.loginContainer} >
            <FlatButton label="Login" />
          </div>
        </Paper>
      </div>
    );
  }
}

var styles = {
  base: {
    display: '-webkit-flex',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    backgroundColor: '#f6f6f6'
  },
  box: {
    fontFamily: 'medium-content-sans-serif-font', 
    width: 300,
    height: 325,
    paddingTop: 30,
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    top: -100,
    // display: '-webkit-flex',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center'
  },
  loginTitle: {
    fontFamily: 'medium-content-serif-font', 
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    margin: '0 auto'
  },
  textField: {
    fontFamily: 'medium-content-sans-serif-font', 
  },
  floatingText: {
    color: '#999999'
  },
  loginContainer: {
    display: '-webkit-flex',
    display: 'flex',
    flexDirection: 'row',
    // minWidth: '100%',
    justifyContent: 'flex-end',
    margin: ' 32px 22px 0 0',
  }
}

export default LoginBox;