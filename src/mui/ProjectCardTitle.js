import React, { Component, PropTypes } from 'react';
import mui, {CardTitle} from 'material-ui';

class ProjectCardTitle extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
    	<CardTitle title={title} subtitle={subtitle} style={styles.base} titleStyle={styles.title} subtitleStyle={styles.subtitle} />
    );
  }
}

var styles = {
	base: {
		paddingBottom: 0
	},
	title: {
		WebkitFontSmoothing: 'antialiased',
		borderCollapse: 'separate',
		color: '#333333',
		display: 'block',
		fontFamily: "medium-content-sans-serif-font, 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif",
		fontSize: '22px',
		fontStyle: 'normal',
		fontWeight: 'bold',
		height: '28px',
		letterSpacing: 'normal',
		lineHeight: '28.6000003814697px',
		wordWrap: 'break-word'
	},
	subtitle: {
		WebkitFontSmoothing: 'antialiased',
		borderCollapse: 'separate',
		color: '#8f8f8f',
		display: 'block',
		fontFamily: "medium-content-sans-serif-font, 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif",
		fontSize: '14px',
		fontStyle: 'normal',
		fontWeight: 'normal',
		height: '28px',
		letterSpacing: 'normal',
		wordWrap: 'break-word',
		marginLeft: 0 
	}
}

export default ProjectCardTitle;