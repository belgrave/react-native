/** UsedView.js **/

//Import Library to create a component
import React, { Component } from 'react'; //Import React and bring in class Component
import { ScrollView, View, Image, StyleSheet } from 'react-native'; // Need to Scroll a view
import SectionHeader from './SectionHeader'; 
import SectionText from './SectionText';

//Create a component
class UsedView extends Component {
	render() {
		console.log( 'UsedView');
		return ( 
			<ScrollView>
				<SectionHeader sectionheaderText={'CURRENT GENERATION'} />
			     <SectionText sectionText={'2016'} />

				 <SectionHeader sectionheaderText={'2013 - 2015 GENERATION'} />
				 <SectionText sectionText={'2015'} />
				 <SectionText sectionText={'2013'} />
				 <SectionText sectionText={'2014'} />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  mainCar: {
  	marginTop: 20,
    width: 350,
    height: 200
  }
});

//Make component available to other parts of the app
export default UsedView;