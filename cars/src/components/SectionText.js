/**
 * SectionText.js
 */

//Import Library to create a component
import React from 'react';
import { Text, View } from 'react-native';

//Create a component
const SectionText = (props) => {
	const { textStyle, viewStyle } = styles;

	return ( 
		<View style={viewStyle}>
			<Text style={textStyle}>{props.sectionText}</Text> 
		</View>
	);
};

//Style the component
const styles = {
	viewStyle: {
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 10,
		elevation: 2,
		position: 'relative'
	},

	textStyle: {
		fontSize: 14
	}
}

//Make component available to other parts of the app
export default SectionText;