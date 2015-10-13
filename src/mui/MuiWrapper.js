import React, { Component, PropTypes } from 'react';
import mui, { AppBar, Paper } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Radium, { Style } from 'radium';

injectTapEventPlugin();

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

class MuiWrapper extends Component {
	getChildContext() { 
		let muiTheme = ThemeManager.getMuiTheme(LightRawTheme);
		muiTheme = ThemeManager.modifyRawThemeFontFamily(muiTheme,'medium-content-sans-serif-font');
		return {
			muiTheme: muiTheme
		};
	}
	render() {
		return (
			<div>
				{<Style rules={{ html: {	position: 'relative', minHeight: '100%' }}} />}
				{this.props.children}
			</div>
		);
	}
}

MuiWrapper.childContextTypes = {
	muiTheme: React.PropTypes.object 
};

export default Radium(MuiWrapper);
