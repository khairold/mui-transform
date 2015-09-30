import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import { FontIcon, IconMenu, IconButton } from 'material-ui';


let Menu = require('material-ui/lib/menus/menu');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');


class ProjectBookmarkIcon extends Component {
  render() {  
    const { bookMarked } = this.props;
    let bookmark;
    switch(bookMarked) {
      case true:
        bookmark = 'bookmark';
        break;
      default:
        bookmark = 'bookmark_outline';
    };

    return (
      <IconButton iconStyle={{color:'#8f8f8f'}} iconClassName="material-icons" tooltipPosition="top-left" tooltip="bookmark">{bookmark}</IconButton>
    );
  }
}

var styles = {
  container: {
    fontFamily: 'medium-content-sans-serif-font', 
    maxWidth: 720,
    padding: '0 10px',
    margin: '0 auto',
    display: 'block'
  },
  itemHeader: {
  	fontFamily: 'medium-content-sans-serif-font', 
  	fontSize:18,
  	fontWeight: 'bold'
  },
  itemHistory: {
  	fontFamily: 'medium-content-sans-serif-font', 
  	fontSize:12,
  	// fontWeight: 'bold'
  },
  icon: {
		color:'#8f8f8f',
  }
}



export default Radium(ProjectBookmarkIcon);