import React, { Component, PropTypes } from 'react';
import mui, {Avatar} from 'material-ui';

class PeopleAvatar extends Component {
  render() {
    const { name, image, size, halfUp } = this.props;
    let initial;

    if (!image && name) {
			initial = name.substr(0,1);
    }
    
    // if (halfUp && size) {
    //   styles.base = {...styles.base, ...{top: sizes[size] / -2}};  
    // }

    return (
			<Avatar size={sizes[size]} style={styles.base} src={image} >{initial}</Avatar>
    );
  }
}

var sizes = {
  list: 40,
  medium: 48,
  large: 60,
  larger: 80,
};

var styles = {
  base: {
	  fontFamily: 'medium-content-sans-serif-font',
    WebkitFontSmoothing: 'antialiased',
    position: 'relative',
    // border: '2px solid #dddddd'
	}
};



export default PeopleAvatar;