import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Button} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import MyHeader from './MyHeader.js';

export default class HomeScreen extends Component {
  render() {
    return(
      <View>

        <View>
          <MyHeader />
        </View>

        <View>

          <Text style = {styles.heading} >
            HomeScreen
          </Text>

        <View style={{margin: 20}}>
          <Button
            title='Go to Err'
            onPress={() => this.props.navigation.navigate('Error_Page')}
          />
        </View>

        <View>
          <Button
            title='Go To HelloWorld'
            onPress={ () => this.props.navigation.navigate('Hello_Page')}
            />
        </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: 'red',
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    paddingTop: 5,
    borderWidth: 5,
    borderColor: 'blue',
    borderRadius: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  space: {
    margin: 30,
  },
});
