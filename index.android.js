import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    StatusBar
} from 'react-native';

export default class ImageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: 'http://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
            Name: 'React Native app'
        };
    }
    render() {
        return (
            <View style= {styles.container}>
                <StatusBar
                 hidden={true}
                />
                <TextInput
                  style={styles.textstyle}
                  placeholder="URL here"
                  onChangeText={(uri) => this.setState({uri})} />
                <TextInput
                  style={styles.textstyle}
                  placeholder="Name of Picture"
                  onChangeText={(name) => this.setState({name})} />
                <Image source={{uri: this.state.uri}} style={{width: 200, height: 150}} />
                <Text style={styles.bigblue}> {this.state.uri.split('/')[this.state.uri.split('/').length-1]}
                </Text>
                <Text style={styles.bigblue}>
                  {this.state.Name}!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    textstyle: {
        width:300,
        height: 40
    },
    red: {
        color: 'red',
    },
});
AppRegistry.registerComponent('AwesomeProject', () => ImageForm);
