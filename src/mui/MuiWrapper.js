import React, { Component, PropTypes } from 'react';
// import React, {Component} from "react";
import mui, { AppBar, Paper } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Radium, { Style } from 'radium';

injectTapEventPlugin();

import LoginBox from './LoginBox';
import GwAppBar from './GwAppBar';
import ProjectBookmarkCards from './ProjectBookmarkCards';
import ProjectUpdate from './ProjectUpdate';
import ProjectInfo from './ProjectInfo';
import ProjectPeople from './ProjectPeople';
import ProjectList from './ProjectList';
import ProjectTab from './ProjectTab';
import ProjectDiscussion from './ProjectDiscussion';

import JSONViewer from '../data';
// import data from '../data';
import serverData from '../data/serverData';

// const ThemeManager = new mui.Styles.ThemeManager();
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

// <ProjectBookmarkCards projectCardsData={projectCardsData} />

class MuiWrapper extends Component {
	// constructor(props, context) {
 //    super(props);
 //    this.state = {muiTheme: context.muiTheme};
 //    // console.log('MUI: ' + this.state.muiTheme)
 //  }
 //  componentWillMount () {
 //      let newMuiTheme = this.state.muiTheme;
 //      newMuiTheme.rawTheme.spacing.iconSize = 20;   
 //      this.setState({muiTheme: newMuiTheme,}); 
 //  }
	getChildContext() { 
		let muiTheme = ThemeManager.getMuiTheme(LightRawTheme);
		muiTheme = ThemeManager.modifyRawThemeFontFamily(muiTheme,'medium-content-sans-serif-font');
		return {
			// muiTheme: ThemeManager.getCurrentTheme()
			// muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
			muiTheme: muiTheme
		};
	}
	render() {


				// <GwAppBar {...appBarData} />
				// <LoginBox />
				// <GwAppBar {...appBarData} />
				// <ProjectList {...projectListData} />
				// <ProjectBookmarkCards projectCardsData={projectCardsData} />
				// <ProjectInfo {...projectInfoData} />
				// <ProjectPeople {...projectPeopleData} />
				// <ProjectUpdate {...projectUpdateData} />
				// <ProjectDiscussion />
				
		return (
			<div>
				{<Style rules={{ html: {	position: 'relative', minHeight: '100%' }}} />}
				
				
				<GwAppBar {...appBarData} />
				<ProjectDiscussion  projectDiscussionData={projectDiscussionData} />
				<JSONViewer json={serverData}></JSONViewer>
				
				
				
				
			</div>
		);
	}
}

MuiWrapper.childContextTypes = {
	muiTheme: React.PropTypes.object 
};

let projectDiscussionData = {
	user: {
		name: 'Kiki',
		image: 'images/people/s61455.jpg',
	},
	projectResponseData: [
	  {
	    name: 'Nina',
	    timeAgo: '3 minutes ago',
	    image: 'images/people/s61455.jpg',
	    discussionText: 'Thanks for putting the time into this great share Mike.'
	  },
	  {
	    name: 'Gordon',
	    timeAgo: '3 minutes ago',
	    image: 'images/people/s61455.jpg',
	    discussionText: 'Thanks for putting the time into this great share Mike.'
	  }
	]
}

let appBarData = {
	title: 'GW Projects',
	shorten: true,
	activeTab: 'bookmarks',
	tabNames: ['list','bookmarks']
}

let projectListData = {
	projectStatusOptions: ['On Going', 'KIV'],
	projectListItemsData: [
	  {
	    title: 'Pangkor',
	    rag: 'amber',
	    bookMarked: true,
	    status: 'On Going',
	    excerpt: "Hmm... Wish I could come, but I'm out.",
	    lastUpdatedAgo: '2 days ago',
	  },
	  {
	    title: 'Pangkor',
	    rag: 'green',
	    bookMarked: false,
	    status: 'On Going',
	    excerpt: "Wish I could come, but I'm out of town this weekend. There's so much more to tell you but I just don't have the time.",
	    lastUpdatedAgo: '2 days ago',
	  },
	  {
	    title: 'Pangkor',
	    rag: 'red',
	    bookMarked: false,
	    status: 'On Going',
	    excerpt: "Wish I could come, but I'm out of town this weekend. There's so much more to tell you but I just don't have the time.",
	    lastUpdatedAgo: '2 days ago',
	  },
	  {
	    title: 'Pangkor',
	    rag: 'kiv',
	    bookMarked: false,
	    status: 'KIV',
	    excerpt: "Wish I could come, but I'm out of town this weekend. There's so much more to tell you but I just don't have the time.",
	    lastUpdatedAgo: '2 days ago',
	  }
	]
}

let projectCardsData = [
	{
		updaterName: 'Hari Mata',
		updaterImage: 'images/people/s61455.jpg',
		lastUpdatedAgo: '2 days ago',
		projectTitle: 'Pangkor',
		projectSubtitle: 'King of POP',
		projectText: 'Everything is on schedule. Right on track.',
		projectRagStatus: 'green',
		projectToGo: '3 days to go',
		projectBookmark: true,
		projectTopPeople: 'Ali / Larter'
	},
	{
		updaterName: 'Hari Mata',
		updaterImage: 'images/people/s61455.jpg',
		lastUpdatedAgo: '2 days ago',
		projectTitle: 'Pangkor',
		projectSubtitle: 'King of POP',
		projectText: 'Yes, each react component has state. State is something internal to the component. Only the component it self can read and write into its own state and as the name implies, the state of the component is used to store state (captain obvious here). Not interesting. Let’s move next.',
		projectRagStatus: 'amber',
		projectToGo: '3 days to go',
		projectBookmark: false,
		projectTopPeople: 'Ali / Larter'
	}
];

let projectInfoData = {
  updaterName: 'Hari Mata',
  updaterImage: 'images/people/s61455.jpg',
  lastUpdatedAgo: '2 days ago',
  projectTitle: 'Pangkor',
  projectSubtitle: 'King of POP',
  projectUpdateQuote: 'Project is doing good. Everything is on schedule. We all are working hard. 8 days a week.',
  projectUpdateText: 'Yes, each react component has state. State is something internal to the component. Only the component itself can read and write into its own state and as the name implies, the state of the component is used to store state (captain obvious here). Not interesting. Let’s move next.',
  projectRagStatus: 'green',
  projectToGo: '3 days to go',
  projectBookmark: false,
  projectTopPeople: 'Ali / Larter',
  projectUpdateOcm: 'OCM #19',
  projectUpdateDate: 'July 24th, 2015',
  currentUpdate: true,
};

let projectPeopleData = {
  projectTitle: 'Pangkor',
  projectSubtitle: 'King of POP',
  projectRagStatus: 'green',
  projectToGo: '3 days to go',
  projectBookmark: false,
  projectUpdateOcm: 'OCM #19',
  projectUpdateDate: 'July 24th, 2015',
  projectPeople: [
    {
      name: 'Ali Larter',
      role: 'Sponsor',
      image: 'images/people/s61455.jpg',
    },
    {
      name: 'Ali Larter',
      role: 'Sponsor',
      image: 'images/people/s61455.jpg',
    },
    {
      name: 'Ali Larter',
      role: 'Sponsor',
      image: 'images/people/s61455.jpg',
    },
    {
      name: 'Ali Larter',
      role: 'Sponsor',
      image: 'images/people/s61455.jpg',
    }
  ]
};

let projectUpdateData = {
  updaterName: 'Hari Mata',
  updaterImage: 'images/people/s61455.jpg',
  lastUpdatedAgo: '2 days ago',
  projectTitle: 'Pangkor',
  projectSubtitle: 'King of POP',
  projectUpdateQuote: 'Project is doing good. Everything is on schedule. We all are working hard. 8 days a week.',
  projectUpdateText: 'Yes, each react component has state. State is something internal to the component. Only the component it self can read and write into its own state and as the name implies, the state of the component is used to store state (captain obvious here). Not interesting. Let’s move next.',
  projectRagStatus: 'green',
  projectToGo: '3 days to go',
  projectBookmark: true,
  projectTopPeople: 'Ali / Larter',
  projectUpdateOcm: 'OCM #19',
  projectUpdateDate: 'July 24th, 2015',
  projectToGo: '3 days to go',
  currentUpdate: true,
};

export default Radium(MuiWrapper);
