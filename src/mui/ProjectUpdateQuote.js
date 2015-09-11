import React, { Component, PropTypes } from 'react';

import PeopleAvatarName from './PeopleAvatarName';

class ProjectUpdateQuote extends Component {
  render() {
    const { container, updaterName, updaterImage, lastUpdatedAgo, projectUpdateQuote } = this.props;
    return (
      <div>
        <div style={styles.base} >
          <div style={container} >
            <blockquote style={styles.blockquote}>
              <span style={styles.bigQuoteMark}>&ldquo;</span>
              <p style={styles.blockquoteP}>  
                {projectUpdateQuote}
              </p>
            </blockquote>
          </div>
        </div>
        <div style={styles.blockquoteCite} >
          <PeopleAvatarName size={'medium'} name={updaterName} image={updaterImage} sub={lastUpdatedAgo} />    
        </div>
      </div>
    );
  }
}

var styles = {
  base: {
    backgroundColor: 'rgba(0,0,0,0.8)', 
    padding: '60px 0'
  },
  blockquote: {
    fontFamily: 'medium-content-serif-font', 
    fontSize: 33,
    fontWeight: 'normal',
    color: '#ffffff',
    WebkitFontSmoothing: 'antialiased',
    // background: '#383838',
    // borderLeft: '2px solid #ccc',
    // margin: '1.5em 10px 1.5em 20px',
    // padding: '1.5em 0px 1.0em 0px',
    padding: '0.3em 0px 1.0em 0px',
    // padding: '20px 0 10px 0'
  },
  bigQuoteMark: {
    fontSize: 40, 
    fontFamily: 'medium-content-serif-font', 
    position:'relative', 
    top: 20, 
    color:'#ffffff'
  },
  blockquoteP: {
    margin:'0px 0px 20px 30px'
  },
  blockquoteCite: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '28px 0 40px 0'
  }
}

export default ProjectUpdateQuote;