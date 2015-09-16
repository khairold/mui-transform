import React, { Component, PropTypes } from 'react';
import { FontIcon, IconButton } from 'material-ui';
import Radium from 'radium';

class ProjectBookmark extends Component {
  render() {
  	const { bookMarked, style, color } = this.props;
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
// <IconButton iconClassName="material-icons" iconStyle={{color:'blue'}} tooltipPosition="bottom-center" tooltip="Sky">bookmark</IconButton>
    return (

<FontIcon color={color} className="material-icons" style={mergedStyles} >{bookmark}</FontIcon>
    );
  }
}

      // <IconButton tooltip="Sort" disabled={false}>
      // <FontIcon color={'#cccccc'} style={mergedStyles} className="material-icons">{bookmark}</FontIcon>
      // </IconButton>

var styles = {
  base: {
    // fontSize: 22
    color: '#8f8f8f',
    // display: 'inline-block',
    // position: 'relative',
    // right: 4,
    // top: 0,
  }
}

export default Radium(ProjectBookmark);