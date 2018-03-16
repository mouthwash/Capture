//Have fun bois
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native working boiiissss Hit R on your Keyboard
          Twice to reload the app if you're using the emulator!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B9E0F5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Verdana',
    margin: 10,
    color: '#5C707A'
  },
});
