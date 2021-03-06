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
import realm, { editNote, deleteNote } from '../database/allSchemas';

//import styles
import { styles } from '../styles/stylesheet';

export default class ExistingNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      paneID: this.props.navigation.state.params.paneID,
      note: this.props.navigation.state.params.note,
      title: this.props.navigation.state.params.noteTitle,
      noteID: this.props.navigation.state.params.noteID,
    };
  }

  render() {
    const { goBack } = this.props.navigation;
    console.log('PANE ID OF ExistingNote=========', this.state.paneID);
    const slideAnimation = new SlideAnimation({
      slideFrom: 'bottom',
    });

    return (
      <Container>

        <Header style={styles.headerStyle}>
          <Left>
            <Button
              transparent
              onPress={() => goBack()}
            >
              <Icon style={styles.iconStyle} name='arrow-back' />
            </Button>
          </Left>
          <Body style={styles.positionStyle}>
            <Button transparent>
              <Text style={styles.textStyle}>
                Capture
              </Text>
            </Button>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => null}
            >
              <Icon type='Feather' name='edit' style={styles.iconStyle} />
            </Button>
          </Right>
        </Header>

        <Content>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.titleStyle}>
              <TextInput
                style={{ fontSize: 24 }}
                autoCorrect
                onChangeText={title => this.setState({ title })}
                underlineColorAndroid='transparent'
                value={this.state.title}
              />
            </View>
          </View>

          <TextInput
            style={styles.inputStyle}
            multiline
            autoCorrect
            underlineColorAndroid='transparent'
            onChangeText={note => this.setState({ note })}
            value={this.state.note}
          />
        </Content>

        <Footer style={styles.footerStyle}>
          <FooterTab style={styles.footerStyle}>
            <Button
              onPress={() => {
                deleteNote(this.state.noteID);
                goBack();
              }}
            >
              <Icon type='Feather' name='trash-2' />
            </Button>
            <Button >
              <Icon type='Feather' name='edit-2' />
            </Button>
            <Button >
              <Icon type='Feather' name='image' />
            </Button>
            <Button
              onPress={() => {
                editNote(this.state.note, this.state.title, this.state.noteID);
                goBack();
              }}
            >
              <Icon type='Feather' name='check' />
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}
