/**
 * ScoreScale.js
 */

//Import Library to create a component
import React from 'react';
import { Text, View } from 'react-native';

//Create a component
const ScoreScale = (props) => {
	const { scoreStyle, scaleViewStyle } = styles;

	return (
		<View>
			<View>
				<Text style={scoreStyle}>{props.score}</Text> 
			</View>
			<View style={scaleViewStyle}>
				<Text>{props.min}{props.max}</Text>
			</View>
		</View>
	);
};

//Style the component
const styles = {
	scoreStyle: {
		backgroundColor: 'yellow'
	},
	scaleViewStyle: {
		width: 150,
		backgroundColor: 'gray'
	}
}

//Make component availble to other parts of the app
export default ScoreScale;