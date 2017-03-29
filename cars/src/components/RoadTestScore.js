/**
 * RoadTestScore.js
 */

//Import Library to create a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ScoreScale from './ScoreScale';

//Create a component
const RoadTestScore = (props) => {
	const { titleStyle, viewStyle, testedStyle } = styles;

	return (
		<View style={viewStyle}>
			<View>
				<Text style={titleStyle}>Road Test Score</Text> 
			</View>
			<View style={testedStyle}>
				<ScoreScale 
					score={props.score}
					min={props.min}
					max={props.max}
				/>
			</View>
		</View>
	);
};

//Style the component
const styles = StyleSheet.create({
	testedStyle: {

	},
	viewStyle: {
		paddingTop: 15,
		flexDirection: 'row'
	},
	titleStyle: {
		marginLeft: 10,
		marginRight: 50,
		fontSize: 12
	}
});

//Make component availble to other parts of the app
export default RoadTestScore;