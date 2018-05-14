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
import Level from './level';

export default class Experience extends Component {

  constructor(props) {
      super(props);
      this.state = {
          currentPercent: this.props.currentPercentFromParent,
          currentLevel: this.props.currentLevelFromParent,
      };
  }

  componentWillReceiveProps() {
    this.setState({
      currentPercent: this.props.currentPercentFromParent,
      currentLevel: this.props.currentLevelFromParent,
    });
  }

  render() {
    return (
      <Container style={styles.expStyle}>
        <View style={styles.barStyle}>
          <XP_bar currentPercentFromEXP={this.state.currentPercent} />
        </View>
        <View style={styles.levelStyle}>
          <Level currentLevelFromEXP={this.state.currentLevel} />
        </View>
      </Container>
    );
  }
}
