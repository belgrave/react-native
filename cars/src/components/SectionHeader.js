/**
 * SectionHeader.js
 */

//Import Library to create a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Create a component
const SectionHeader = (props) => {
	const { textStyle, viewStyle } = styles;

	return ( 
		<View style={viewStyle}>
			<Text style={textStyle}>{props.sectionheaderText}</Text> 
		</View>
	);
};

//Style the component
const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#F8F8F8', //CSS camel case
		height: 60,
		paddingTop: 15,
		paddingLeft: 10,
		elevation: 2,
		position: 'relative'
	},

	textStyle: {
		fontSize: 20
	}
});

//Make component availble to other parts of the app
export default SectionHeader;