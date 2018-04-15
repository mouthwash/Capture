
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import NewNote from './src/components/NewNote';
import NotePanes from './src/components/NotePanes';

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  NotePanesScreen: { screen: NotePanes, navigationOptions: { header: null } },
  NewNoteScreen: { screen: NewNote, navigationOptions: { header: null } },
});
