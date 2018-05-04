import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Card,
    CardItem,
    Text,
    Container,
    Header,
    Body,
    Content,
    Left,
    Right,
    Icon,
    Button,
    Item,
    Input,
    Footer
} from 'native-base';
import realm, { editNotePane, getNotePanes, insertNewNotePane, deleteNotePane } from '../database/allSchemas';

//import styles
import { styles } from '../styles/stylesheet';
import XP_bar from './xpBar';

export default class Experience extends Component {
  render () {
    return (
      <Container style={styles.expStyle}>
        <View style={styles.barStyle}>
          <Text>left</Text>
        </View>
        <View style={styles.levelStyle}>
          <Text>Right</Text>
        </View>
      </Container>
    );
  }
}
