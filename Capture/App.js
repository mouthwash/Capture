//Have fun bois
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import NewNote from './src/components/NewNote';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <NewNote></NewNote>
        </View>
      </Provider>
    );
  }
}
