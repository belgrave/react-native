/** NewView.js **/

//Import Library to create a component
import React, { Component } from 'react'; //Import React and bring in class Component
import { ScrollView, View, Image, StyleSheet } from 'react-native'; // Need to Scroll a view
import SectionHeader from './SectionHeader'; 
import SectionText from './SectionText';

//Create a component
class NewView extends Component {
	render() {
		console.log( 'NewView');
		return ( 
			<ScrollView>
				<View>
			        <Image
			          style={styles.mainCar}
			          source={require('./tesla-modelx.jpg')}
			        />
			     </View>
			     <SectionText sectionText={'Tesla Model X 2017 \nMSRP: $43,950 - $58,400'} />

				 <SectionHeader sectionheaderText={'Summary'} />
				 <SectionText sectionText={'The electric-powered Model X is more showy than practical. It features rear doors that open up and out of the way, giving easy access to the rear seats. But these massive doors take their time to open and close.'} />

				 <SectionHeader sectionheaderText={'Tested Cars'} />
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
export default NewView;