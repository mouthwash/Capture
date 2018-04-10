import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, Dimensions } from 'react-native';
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
import { noteChanged } from '../actions';
import { updateNotePane, deleteNotePane, queryAllNotePanes } from '../database/allSchemas';
import realm from '../database/allSchemas';

class NewNote extends Component {
  onNoteChange(text) {
    this.props.noteChanged(text);
  }
  render() {
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Left>
            <Button transparent>
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
            autoCo
            underlineColorAndroid='transparent'
            autoCorrect={false}
            onChangeText={this.onNoteChange.bind(this)}
            value={this.props.note}
          />
        </Content>
        <Footer style={styles.footerStyle}>
          <FooterTab style={styles.footerStyle}>
            <Button transparent>
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

const mapStateToProps = state => {
  return {
    note: state.noteChange.note
  };
};

export default connect(mapStateToProps, { noteChanged })(NewNote);
