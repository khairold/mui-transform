import React, { Component, PropTypes } from 'react';

import PeopleAvatar from './PeopleAvatar';
import PeopleName from './PeopleName';
import TimeAgo from './TimeAgo';

class PeopleAvatarName extends Component {
  render() {
  	const { image, name, sub, size } = this.props;
    return (
      <div style={styles.base}>
        <PeopleAvatar name={name} image={image} size={size} />
        <div style={{marginLeft:8}}>
          <div>
            <PeopleName size={size} >{name}</PeopleName>
          </div>
          <div>
            <TimeAgo size={size}>{sub}</TimeAgo>
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
    alignItems: 'center'
  }
}

export default PeopleAvatarName;