import React, { Component, PropTypes } from 'react';
import mui, {CardText} from 'material-ui';

class ProjectCardText extends Component {
  render() {
    const { children } = this.props;
    return (  	
    		<CardText style={styles.base} >
    			<div style={styles.quoteFlex} >
    				<span style={styles.bigQuoteMark}>&ldquo;</span>
          	<p style={styles.blockquoteP} >
          		{children}
          	</p>
          </div>
    		</CardText>
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
		lineHeight: '26px',
		wordWrap: 'break-word',
		textShadow: 'rgba(0,0,0,.01) 0 0 1px'
	},
	bigQuoteMark: {
    fontSize: 40, 
    fontFamily: 'medium-content-serif-font', 
    position:'relative', 
    // top: 20, 
    color:'#333333'
  },
  blockquoteP: {
    margin:'0px 12px 0 8px',
  },
  quoteFlex: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 22px'
  }
}

export default ProjectCardText;