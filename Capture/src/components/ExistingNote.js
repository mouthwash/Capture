import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Content
} from 'native-base';
import realm, { updateNotePane, deleteNotePane, queryAllNotePanes, insertNewNote } from '../database/allSchemas';

export default class ExistingNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      paneID: this.props.navigation.state.params.paneID,
      note: this.props.navigation.state.params.note,
    };
  }

  render() {
    const { goBack } = this.props.navigation;
    console.log('PANE ID OF ExistingNote=========', this.state.paneID);
    const slideAnimation = new SlideAnimation ({
      slideFrom: 'bottom',
    });

    return (
      <Container>
        <Header>
          <Text>Existing Header</Text>
        </Header>
        <Content>
          <Text> {this.state.note} </Text>
        </Content>
        <Footer>
          <FooterTab></FooterTab>
        </Footer>
      </Container>
    );
  }
}
