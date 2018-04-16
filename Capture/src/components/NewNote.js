import React, { Component } from 'react';
import { TextInput } from 'react-native';
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
import realm, { updateNotePane, deleteNotePane, queryAllNotePanes } from '../database/allSchemas';

export default class NewNote extends Component {
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
            <Button
              transparent
              onPress={() => goBack()}
            >
              <Icon style={styles.iconStyle} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text style={styles.textStyle}>New Note</Text>
          </Body>
          <Right>

          </Right>
        </Header>
        <Content>
          <TextInput
            style={styles.inputStyle}
            multiline
            autoFocus
            autoCorrect
            underlineColorAndroid='transparent'
            autoCorrect={false}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </Content>
        <Footer style={styles.footerStyle}>
            <FooterTab style={styles.footerStyle}>
                <Button
                  transparent
                  onPress={null}
                >
                    <Icon type='Feather' name='trash-2' />
                </Button>

                <Button transparent>
                    <Icon type='Feather' name='edit-2' />
                </Button>

                <Button transparent>
                    <Icon type='Feather' name='image' />
                </Button>

                <Button transparent>
                    <Icon type='Feather' name='check' />
                </Button>

            </FooterTab >
        </Footer>
      </Container>
    );
  }
}

const styles = {
  headerStyle: {
    backgroundColor: '#06317c',
    elevation: 0
  },
  inputStyle: {
    textAlignVertical: 'top',
    fontSize: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  iconStyle: {
    color: 'white'
  },
  textStyle: {
      fontSize: 20,
      color: 'white'
  }
};
