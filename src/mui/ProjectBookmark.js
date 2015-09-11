import React, { Component, PropTypes } from 'react';
import { FontIcon, IconButton } from 'material-ui';
import Radium from 'radium';

class ProjectBookmark extends Component {
  render() {
  	const { bookMarked, style } = this.props;
    let bookmark;
    switch(bookMarked) {
      case true:
        bookmark = 'bookmark';
        break;
      default:
        bookmark = 'bookmark_outline';
    };
    let mergedStyles = {...styles.base, ...style};
    console.log(mergedStyles); 
//<FontIcon className="material-icons" style={mergedStyles} >{bookmark}</FontIcon>
    return (
      <IconButton color={'#cccccc'} style={mergedStyles} iconClassName="material-icons">{bookmark}</IconButton>
    );
  }
}

var styles = {
  base: {
    // fontSize: 22
    color: '#8f8f8f'
  }
}

export default Radium(ProjectBookmark);