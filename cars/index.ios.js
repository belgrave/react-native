/**
 * Sample React Native App - Index.ios.js
 * 1 component per file
 * 
 * expand component to fill entire content area of device. View style={{ flex: 1 }}
 */

//Import Library to create a component
import React from 'react';
import { AppRegistry, View, Navigator, TouchableHighlight } from 'react-native'; 	    //import npm modules
import Header from './src/components/Header'; 		//import user created components
import CarList from './src/components/CarList'; 
import TopNav from './src/components/TopNav'; 

//Create a app
const App = () => {
	return (
		<View style={{ flex: 1 }}> 
		 	<Header headerText={'Tesla Model X'}/>
		 	<TopNav /> 
		 	<CarList />
		</View>
	);
};

//Render component to device
AppRegistry.registerComponent('cars', () => App);
