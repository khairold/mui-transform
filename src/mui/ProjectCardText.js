import React, { Component, PropTypes } from 'react';
import mui, {CardText} from 'material-ui';

class ProjectCardText extends Component {
  render() {
    const { children } = this.props;
    return (
    	<CardText style={styles.base} >{children}</CardText>
    );
  }
}

var styles = {
	base: {
		WebkitFontSmoothing: 'antialiased',
		borderCollapse: 'separate',
		color: '#333333',
		display: 'block',
		fontFamily: 'medium-content-serif-font, Georgia, Cambria, Times, serif',
		fontSize: '18px',
		fontStyle: 'normal',
		fontWeight: 'normal',
		letterSpacing: 'normal',
		lineHeight: '26.1px',
		wordWrap: 'break-word',
		textShadow: 'rgba(0,0,0,.01) 0 0 1px'
	}
}

export default ProjectCardText;