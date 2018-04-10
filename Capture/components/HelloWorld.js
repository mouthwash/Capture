import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import { Button } from 'react-native-elements';

import MyHeader from './MyHeader.js';

export default class HelloWorld extends Component {
  /*  This can referenced  for onPress by using this._buttonClick()
   *  it is better for more complicated alerts w/ multiple option
   *  for simple alerts, its best to create it within the button
   */
  _buttonClick() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View>
        <MyHeader />
        <Button
          onPress={() => {
            Alert.alert('Button Pressed')
          }}
          clear={true}
          title=" Hello World! "
          color="purple"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
