import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import { Paper } from 'material-ui';
import PeopleAvatar from './PeopleAvatar';
import PeopleName from './PeopleName';
import GreyedText from './GreyedText';

class PeopleCard extends Component {
  render() {
  	const { image, name, role } = this.props;
    return (
      <Paper style={{width:180, height:198, margin: '8px 10px'}} zDepth={0}>
        <div style={{padding: '20px'}} >
          <div style={styles.avatarCenter}>
            <PeopleAvatar size={'larger'} image={image} />
          </div>
          <div style={{...styles.avatarCenter, ...{paddingTop: 10, paddingBottom: 3}}}>
            <PeopleName size={'medium'} bold={true} >{name}</PeopleName>
          </div>
          <div style={styles.avatarCenter}>
            <GreyedText size={'medium'} >{role}</GreyedText>
          </div>
        </div>
      </Paper>
    );
  }
}

var styles = {
  avatarCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
}

export default Radium(PeopleCard);