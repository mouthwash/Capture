import React, {Component} from 'react';
import {View, Text, Alert, Image, TouchableHighlight, StyleSheet} from 'react-native';
import { Button, Tile, Card, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import MyHeader from './MyHeader.js';

export default class ErrorPage extends Component {
  render() {
    return(
      <View>
        <MyHeader />
        <Text
          selectable={false}
          style={
            [styles.h1]
          }
        >
          WHOOPS, WHAT HAPPENED
        </Text>
        <Button
          icon={
            <Icon
              name='arrow-right'
              size={15}
              color='white'
            />
          }
          title='BUTTON WITH ICON'
          style={{marginTop: '50px'}}
        />

      <View>
        <Card
          title='HELLO WORLD'
          image={require("/Users/DAN/Documents/local_code/react_native_init/capture/Capture/components/img/fail_whale.jpg")}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
      </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'skyblue',
    padding: 10
  },
  h1: {
    fontSize: 20,
    textAlign: 'center',
  },
  red: {
    color: 'red',
  },
  bottom: {
    alignItems: 'center',
  },
})
