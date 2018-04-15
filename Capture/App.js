import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import NotePanes from './src/components/NotePanes.js';
import NewNote from './src/components/NewNote.js';

const RootStack = StackNavigator(
{
    Panes: { screen: NotePanes, navigationOptions: { header: null } },
    New:   { screen: NewNote, navigationOptions: { header: null } },
  },
  {
    initialRouteName: 'Panes',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    color: 'red',
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    paddingTop: 5,
    borderWidth: 5,
    borderColor: 'blue',
    borderRadius:20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  space: {
    margin: 30,
  }
});
