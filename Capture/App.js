/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import {Button} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
//import AllRoutes from './components/RootStack';
import HelloWorld from './components/HelloWorld';
import ErrorPage from './components/ErrorPage';
import MyHeader from './components/MyHeader.js';
import NotePanes from './components/NotePanes.js';
import NewNote from './components/NewNote.js';

const RootStack = StackNavigator(
  {
    Note_Panes: {screen: NotePanes},
    New_Note_Template: {screen: NewNote},
    Home: {screen: HomeScreen},
  },
  {
    initialRouteName: 'Note_Panes',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}


/*
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          L33T!
        </Text>
        <View style={styles.space}></View>
        <Button
          title="Test Button"
          onPress={() => {
            Alert.alert('Test Complete');
          }}
          />
      </View>
    );
  }
}
//*/

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
