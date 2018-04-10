import React, {Component} from 'react';
import {View, Text, Alert, Image} from 'react-native';
import { Button, Card, ListItem } from 'react-native-elements';

export default class NoteObj extends Component {
  render () {
    return(
      <View>
        <Card
  title='HELLO WORLD'
  image={require('components/img/fail_whale.jpg')}>
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
    );
  }
}
