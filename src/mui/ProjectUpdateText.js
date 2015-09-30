import React, { Component, PropTypes } from 'react';

class ProjectUpdateText extends Component {
  render() {
    const { container, projectUpdateText } = this.props;
    return (
        <div style={container} >
          <div style={styles.base} >
            {projectUpdateText}
          </div>
        </div>
    );
  }
}

var styles = {
  base: {
    WebkitFontSmoothing: 'antialiased',
    borderCollapse: 'separate',
    color: '#333333',
    fontFamily: 'medium-content-serif-font, Georgia, Cambria, Times, serif',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineHeight: '33px',
    wordWrap: 'break-word',
    textShadow: 'rgba(0,0,0,.01) 0 0 1px',
    margin: '48px 0 148px 0',
  },
}

export default ProjectUpdateText;