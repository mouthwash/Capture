import React, { Component } from 'react';
import { TextInput, View, Text, Platform } from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon
} from 'native-base';

export default class NewPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    const {goBack} = this.props.navigation;
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Left>
            <Button transparent
              onPress={() => goBack()}
              >
              <Icon style={styles.iconStyle} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text style={styles.textStyle}>New Page</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.iconStyle} name='trash' />
            </Button>
          </Right>
        </Header>
        <View style={styles.containerStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter title for page here"
            />
          <View style={styles.buttonStyle}>
            {/* TODO - IMPLEMENT onPress TO CREATE NEW PANE */}
            <Button
              success
              >
              <Text style={{color: 'white'}}> Submit </Text>
            </Button>
          </View>
        </View>
      </Container>
    )
  }
}

const styles = {
  textStyle: {
    fontSize: 20,
    color: 'white',
  },
  headerStyle: {
    backgroundColor: '#06317c',
    elevation: 0
  },
  inputStyle: {
    textAlignVertical: 'top',
    fontSize: 12,
    paddingLeft: 15,
    paddingRight: 15,
  },
  iconStyle: {
    color: 'white'
  },
  footerStyle: {
    backgroundColor: 'transparent',
  },
  containerStyle: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
  },
  buttonStyle: {
    position: 'absolute',
    paddingLeft: 20,
    paddingBottom: 20,
    bottom: 0,
  }
};
