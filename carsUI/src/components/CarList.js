/** CarList.js **/

//Import Library to create a component
import React, { Component } from 'react'; //Import React and bring in class Component
import { StyleSheet } from 'react-native'; // Need to Scroll a view
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import NewView from './NewView';
import UsedView from './UsedView';

//Create a component
class CarList extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'New' },
      { key: '2', title: 'Used' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
	    case '1': return <NewView />;
	    case '2': return <UsedView />;
	    default:
	      return null;
	    }
  };

	render() {
		console.log( 'CarList');
		return ( 
			<TabViewAnimated
		        style={styles.container}
		        navigationState={this.state}
		        renderScene={this._renderScene}
		        renderHeader={this._renderHeader}
		        onRequestChangeTab={this._handleChangeTab}
		     />
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

//Make component available to other parts of the app
export default CarList;