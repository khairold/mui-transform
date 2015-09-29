import React, { Component, PropTypes } from 'react';
import mui, { CardText, FontIcon, IconButton, IconMenu} from 'material-ui';

let MenuItem = require('material-ui/lib/menus/menu-item');

import GreyedText from './GreyedText';
import ProjectRagStatus from './ProjectRagStatus';
import ProjectBookmark from './ProjectBookmark';

class ProjectCardFooter extends Component {
  render() {
    const { rag, toGo, bookMark, people } = this.props;
    let i = <IconButton iconClassName="material-icons" style={{padding:0}} iconStyle={styles.iconsButton} tooltipPosition="top-right" tooltip={'discussion'} >{'chat_bubble_outline'}</IconButton>;

    return (
			<CardText>
				<div style={styles.footerOut}>

					<div>
					<FontIcon className="material-icons" color={styles.iconColor} style={styles.icons} >info_outline</FontIcon>
			        <FontIcon className="material-icons" color={styles.iconColor} style={styles.icons}>people_outline</FontIcon>
			        <FontIcon className="material-icons" color={styles.iconColor} style={styles.icons} >history</FontIcon>          
			        <FontIcon className="material-icons" color={styles.iconColor} style={styles.icons} >chat_bubble_outline</FontIcon>

{/*}
			        <IconButton iconClassName="material-icons" iconStyle={styles.iconsButton} tooltipPosition="top-right" tooltip={'info'} >{'info_outline'}</IconButton>
			        <IconButton iconClassName="material-icons" iconStyle={styles.iconsButton} tooltipPosition="top-right" tooltip={'people'} >{'people_outline'}</IconButton>
			        <IconButton iconClassName="material-icons" style={{padding:0}}  iconStyle={styles.iconsButton} tooltipPosition="top-right" tooltip={'progress history'} >{'history'}</IconButton>
			        <IconButton iconClassName="material-icons" style={{padding:0}} iconStyle={styles.iconsButton} tooltipPosition="top-right" tooltip={'discussion'} >{'chat_bubble_outline'}</IconButton>

			    */}
					</div>
					<div style={styles.footerIn}>
						
						
						
						
						<GreyedText style={{fontStyle: 'italic', marginLeft: 20}} brightness={'darker'}  >{toGo}</GreyedText> 
						{/*<div style={styles.seperator} />*/}
						<ProjectBookmark color={styles.iconColor} bookMarked={bookMark} style={{marginLeft: 8}} />
					</div>

			        {/*<IconMenu iconButtonElement={i}>
			        
  <MenuItem primaryText="Refresh" />
  <MenuItem primaryText="Send feedback" />
  <MenuItem primaryText="Settings" />
  <MenuItem primaryText="Help" />
  <MenuItem primaryText="Sign out" />
  </IconMenu>*/}

				</div>
			</CardText>
    );
  }
}


var styles = {
	base: {
		paddingBottom: 0
	},
	footerOut: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderTop: '1px solid #ededed',
		paddingTop: 12
	},
	footerIn: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	seperator: {
    height: 30,
    margin: '0 10px',
    borderLeft: '1px solid #cccccc',
  },
  icons: {
  	fontSize: 22, 
  	margin: '0 6px'
  },
  iconColor: '#acacac',
  iconsButton: {
  	fontSize: 22, 
  	margin: '0 0px',
  	padding: 0,
  	color:'#acacac'
  },
}

export default ProjectCardFooter;