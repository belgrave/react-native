/**
 * RatingBox.js
 */

//Import Library to create a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Create a component
const RatingBox = (props) => {
	const { titleStyle, boxStyle, scoreStyle, viewStyle, testedStyle } = styles;

	return (
		<View style={viewStyle}>
			<View style={boxStyle}>
				<Text style={titleStyle}>{props.title}</Text> 
				<Text style={scoreStyle}>{props.score}</Text> 
			</View>
			<View style={testedStyle}>
				<Text style={titleStyle}>{props.name}</Text> 
				<Text style={titleStyle}>{props.engine}</Text> 
			</View>
		</View>
	);
};

//Style the component
const styles = StyleSheet.create({
	testedStyle: {
		marginTop: 10,
		marginLeft: 10
	},
	viewStyle: {
		flexDirection: 'row'
	},
	boxStyle: {
		backgroundColor: 'green', //CSS camel case
		height: 100,
		width: 100,
		paddingTop: 10,
		paddingLeft: 10,
		marginLeft: 10,
		marginTop: 10
	},
	titleStyle: {
		fontSize: 12
	},
	scoreStyle: {
		fontSize: 60
	}
});

//Make component availble to other parts of the app
export default RatingBox;