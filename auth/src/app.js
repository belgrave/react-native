import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
/* Because from does not have a file name in import path, index.js is read by default */
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp ({
			apiKey: 'AIzaSyBMoIdshMhYqaaZvsNd9RmIE2hdBcU_H4Y',
			authDomain: 'auth-6a307.firebaseapp.com',
			databaseURL: 'https://auth-6a307.firebaseio.com',
			storageBucket: 'auth-6a307.appspot.com',
			messagingSenderId: '380543570827'
		});
  	}

	render() {
		return (
			<View>
				<Header headerText={'Authentication'}/>
				<LoginForm>
				</LoginForm>
			</View>
		);
	}
}

export default App;