/**
 * AlbumList.js
 */

//Import Library to create a component
import React, { Component } from 'react'; //Import React and bring in class Component
import { ScrollView } from 'react-native'; // Need to Scroll a view
import axios from 'axios';
import AlbumDetail from './AlbumDetail'; 

//Create a component
class AlbumList extends Component {
	state = { albums: [] }; 

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then( response => this.setState( { albums: response.data }) );
	}

	renderAlbums() {
		return this.state.albums.map( album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		console.log( this.state );
		return ( 
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

//Make component availble to other parts of the app
export default AlbumList;