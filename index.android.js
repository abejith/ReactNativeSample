/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

export default class AwesomeProject extends Component {
	  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    let pic = {
       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
     };
     return (
       <View style= {{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
       <TextInput
          style={{width:300 ,height: 40}}
          placeholder="Type here to type in big blue color!"
          onChangeText={(text) => this.setState({text})}
        />
       <Image source={{uri: this.state.text}} style={{width: 193, height: 110}}/>
       <Text style={styles.bigblue}>
          {this.state.text.split(' ').join(' ')}
        </Text>
       </View>
     );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
