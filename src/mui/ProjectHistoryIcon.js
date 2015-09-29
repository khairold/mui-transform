import React, { Component, PropTypes } from 'react';

import { FontIcon, IconMenu, IconButton } from 'material-ui';


let Menu = require('material-ui/lib/menus/menu');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');


class ProjectHistoryIcon extends Component {
  render() {  
    const { updaterName, updaterImage, lastUpdatedAgo, projectTopPeople, projectBookmark, projectUpdateQuote, projectUpdateText, projectTitle, projectSubtitle, projectUpdateOcm, projectUpdateDate, projectRagStatus, projectToGo } = this.props;
    
    let historyIcon = <IconButton iconStyle={{color:'#8f8f8f'}} iconClassName="material-icons" tooltipPosition="top-left" tooltip="progress history"  >history</IconButton>;

    let historyItems = projectHistoryData.histories.map(function(history){

    	let backgroundColor;
	    switch(history.rag) {
	      case 'green':
	        backgroundColor = '#57ad68';
	        break;
	      case 'red':
	        backgroundColor = '#f44336';
	        break;
	      case 'amber':
	        backgroundColor = '#ffc107';
	        break;
	      default:
	        backgroundColor = '#aaaaaa';
	    }

    	return <MenuItem primaryText={history.date} style={styles.itemHistory} leftIcon={<FontIcon className="material-icons" color={backgroundColor} >lens</FontIcon> } />
    })

    return (

          <IconMenu iconButtonElement={historyIcon} openDirection={'top-right'} width={680}>
          	<MenuItem primaryText='Progress History' disabled={true} style={styles.itemHeader} />
          	<MenuDivider />
          	{historyItems}
          </IconMenu>

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
  }
}

let projectHistoryData = {
	projectUpdateSlug: 'projects/name/updates/',
	histories: [
		{
			date: 'September 24th, 2015',
			rag: 'amber',
			slug: '20150924'
		},
		{
			date: 'July 24th, 2015',
			rag: 'green',
			slug: '20150724'
		},
		{
			date: 'June 24th, 2015',
			rag: 'red',
			slug: '20150624'
		}
	]
}

export default ProjectHistoryIcon;