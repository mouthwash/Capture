import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
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
import { insertNewNote } from '../database/allSchemas';

//import styles
import { styles } from '../styles/stylesheet';

export default class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date_time: '',
            isDateTimePickerVisible: false,
            paneID: this.props.navigation.state.params.paneID,
        };
    }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.setState({ date_time: date });
    this.hideDateTimePicker();
  };

    render() {
        const { goBack } = this.props.navigation;
        console.log('PANE ID OF NEW NOTE=========', this.state.paneID);
        const slideAnimation = new SlideAnimation ({
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
                    <Body>
                        <Text style={styles.textStyle}>
                          New Note
                        </Text>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={this.showDateTimePicker}
                        >
                            <Icon type='Feather' name='clock' style={styles.iconStyle} />
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
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    />
                </Content>

                <Footer style={styles.footerStyle}>
                    <FooterTab style={styles.footerStyle}>
                        <Button onPress={null} >
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
                              const key = Math.floor(Date.now() / 1000);
                              const newNote = {
                                id: key,
                                note: this.state.text,
                                creationDate: Date(),
                                modifiedDate: Date(),
                                finished: false,
                                title: this.state.text,
                                dueDate: this.state.date_time,
                              };
                              console.log('NEW NOTE =======', newNote);
                              insertNewNote(newNote, this.state.paneID);
                              goBack();
                            }
                          }
                        >
                          <Icon type='Feather' name='check' />
                        </Button>
                    </FooterTab >
                </Footer>

                  <DateTimePicker
                    mode='datetime'
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                  />


            </Container>
        );
    }
}
