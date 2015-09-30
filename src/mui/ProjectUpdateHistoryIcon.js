import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import { FontIcon, IconMenu, IconButton } from 'material-ui';


let Menu = require('material-ui/lib/menus/menu');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');


class ProjectUpdateHistoryIcon extends Component {
  // constructor(props, context) {
  //   super(props);
  //   this.state = {muiTheme: context.muiTheme};
  //   // console.log('MUI: ' + this.state.muiTheme)
  // }
  // componentWillMount () {
  //     let newMuiTheme = this.state.muiTheme;
  //     newMuiTheme.rawTheme.spacing.iconSize = 20;   
  //     this.setState({muiTheme: newMuiTheme,}); 
  // }
  render() {  
    const { size, activeProjectSubPage, updaterName, updaterImage, lastUpdatedAgo, projectTopPeople, projectBookmark, projectUpdateQuote, projectUpdateText, projectTitle, projectSubtitle, projectUpdateOcm, projectUpdateDate, projectRagStatus, projectToGo } = this.props;
    let iconStyle;
    let openDirection = 'top-right';

    if (activeProjectSubPage == 'updates') {
      iconStyle = {
        color: '#333333',
        fontSize: 36,
        margin:'0 10px 0 10px',
        padding: 0,
        top: -6
      }
      
    } else {
      iconStyle = {
        color: '#8f8f8f'
      }
    }

    if (size == 'small') {
      iconStyle = {...{iconStyle}, positon: 'relative', top:-8, fontSize:14, color: '#8f8f8f', padding: 0, margin: 0, width: 14, height: 14};
      openDirection = 'bottom-left';
    }

    let historyIcon = <IconButton iconStyle={iconStyle} iconClassName="material-icons" tooltipPosition="top-left" tooltip="updates history"  >history</IconButton>;
    // historyIcon = Radium(historyIcon);

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

          <IconMenu iconButtonElement={historyIcon} openDirection={openDirection} width={680}>
          	<MenuItem primaryText='Updates History' disabled={true} style={styles.itemHeader} />
          	<MenuDivider />
          	{historyItems}
          </IconMenu>

    );
  }
}

// ProjectUpdateHistoryIcon.contextTypes = {
//   muiTheme: React.PropTypes.object,
// }

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
  },
  small: {
    fontSize: 12
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

export default Radium(ProjectUpdateHistoryIcon);