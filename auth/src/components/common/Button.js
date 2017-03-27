/**
 * Button.js
 */

//Import Library to create a component
import React from 'react'; //Import React and bring in class Component
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ theHandler, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={ theHandler } 
						  style={ buttonStyle }>
			<Text style={ textStyle }>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},

	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
}

export { Button };