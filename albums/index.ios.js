/**
 * Sample React Native App - Index.ios.js
 * 1 component per file
 * 
 * expand component to fill entire content area of device. View style={{ flex: 1 }}
 */

//Import Library to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native'; 	    //import npm modules
import Header from './src/components/Header'; 		//import user created components
import AlbumList from './src/components/AlbumList'; 

//Create a app
const App = () => {
	return (
		<View style={{ flex: 1 }}>   
		 	<Header headerText={'Albums !!'}/>
		 	<AlbumList />
		</View>
	);
};

//Render component to device
AppRegistry.registerComponent('albums', () => App);
