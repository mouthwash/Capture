import React, { Component } from 'react';
import { TextInput } from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
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
          <Right>
            <Button transparent>
              <Icon style={styles.iconStyle} name='menu' color='blue' />
            </Button>
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
                    <Text>Done</Text>
                </Button>

                <Button transparent>
                    <Text>Draw</Text>
                </Button>

                <Button transparent>
                    <Text>Add Picture</Text>
                </Button>

                <Button transparent>
                    <Text>Create New</Text>
                </Button>

            </FooterTab >
        </Footer>
      </Container>
    );
  }
}

const styles = {
  headerStyle: {
    backgroundColor: 'transparent',
    elevation: 0
  },
  inputStyle: {
    textAlignVertical: 'top',
    fontSize: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  iconStyle: {
    color: 'rgb(0,122,255)'
  },
  footerStyle: {
    backgroundColor: 'transparent',
  },
};
