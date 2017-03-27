/**
 * Header.js
 */

//Import Library to create a component
import React from 'react';
import { Text, View } from 'react-native';

//Create a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return ( 
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text> 
		</View>
	);
};

//Style the component
const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8', //CSS camel case
		justifyContent: 'center',  //flexbox used to position  components
		alignItems: 'center',      //flexbox
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width:0, height:2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},

	textStyle: {
		fontSize: 20
	}
}

//Don't use default to export, needed to make component availble via index.js
export { Header };