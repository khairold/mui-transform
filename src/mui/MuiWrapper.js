import React, { Component, PropTypes } from 'react';
import mui, { AppBar, Paper } from 'material-ui';
import Radium, { Style } from 'radium';

import LoginBox from './LoginBox';
import GwAppBar from './GwAppBar';
import ProjectCard from './ProjectCard';
import ProjectUpdate from './ProjectUpdate';
import ProjectMain from './ProjectMain';
import ProjectPeople from './ProjectPeople';
import ProjectList from './ProjectList';
import ProjectTab from './ProjectTab';

const ThemeManager = new mui.Styles.ThemeManager();

class MuiWrapper extends Component {
	getChildContext() { 
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	}
	render() {

		let projectCardNodes = projectCardsData.map(function(projectCardData){
			return (
				<ProjectCard {...projectCardData} />
			);
		});

				// <GwAppBar />
				// <LoginBox />
				// <ProjectUpdate />
				// <ProjectMain />
				// <ProjectPeople />
				// <ProjectList />
				// {projectCardNodes}

				
		return (
			<div>
				{<Style rules={{ html: {	position: 'relative', minHeight: '100%' }}} />}
				
				<GwAppBar {...appBarData} />
				<ProjectList />
				
			</div>
		);
	}
}

MuiWrapper.childContextTypes = {
	muiTheme: React.PropTypes.object 
};

let appBarData = {
	title: 'GW Projects',
	tab: true,
	activeTab: 'list',
	tabNames: ['list','bookmarks']
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

export default Radium(MuiWrapper);
