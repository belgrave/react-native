/**
 * ScoreScale.js
 */

//Import Library to create a component
import React from 'react';
import { Text, View } from 'react-native';

//Create a component
const ScoreScale = (props) => {
	const { scoreStyle, rangeViewStyle, rangeStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<View>
				<Text style={scoreStyle}>{props.score}</Text>
			</View>
			<View style={rangeViewStyle}>
				<Text style={rangeStyle}>{props.min}{props.max}</Text>
			</View>
		</View>
	);
};

//Style the component
const styles = {
	viewStyle: {
		width: 200
	},
	scoreStyle: {
		backgroundColor: 'green',
		color: 'white',
		width: 25,
		height: 25,
		marginLeft: 75
	},
	rangeViewStyle: {
		backgroundColor: '#f1f1f1'
	},
	rangeStyle: {
		width: 55,
		backgroundColor: 'gray'
	}
}

//Make component availble to other parts of the app
export default ScoreScale;