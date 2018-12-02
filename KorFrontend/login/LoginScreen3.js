import React, { Component } from 'react';
import { Text, View, Dimensions, TextInput } from 'react-native';
import App from '../App';
import {Navigator} from 'react-native-deprecated-custom-components';
import {createStackNavigator} from 'react-navigation';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View>
       <Text> Please type a username for KOR</Text>
        <TextInput
        style={{height: 40, width: Dimensions.get('window').width*.8, borderColor: 'gray', borderWidth: 1}}
        placeholder="Username"
        onChangeText={(text) => this.setState({text})}
      />
     
      </View>
    );
  }
}
