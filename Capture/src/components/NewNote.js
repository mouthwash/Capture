import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import PushNotification, { PushNotificationIOS } from 'react-native-push-notification';
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
import { styles, colorway } from '../styles/stylesheet';

export default class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date_time: new Date(0),
            isDateTimePickerVisible: false,
            paneID: this.props.navigation.state.params.paneID,
        };

        PushNotification.configure({

            // (optional) Called when Token is generated (iOS and Android)
            onRegister(token) {
                console.log('TOKEN:', token);
            },

            // (required) Called when a remote or local notification is opened or received
            onNotification: (notification) => {
                console.log('NOTIFICATION:', notification);

                // process the notification

                // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
                // notification.finish(PushNotificationIOS.FetchResult.NoData);
                //notification.finish(PushNotification.FetchResult.NoData);
            },

          // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications,
          //but is need to receive remote push notifications)
            senderID: 'YOUR GCM SENDER ID',

            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },

            popInitialNotification: true,
            requestPermissions: true,
        });
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
                    {/*Title Input*/}
                    <TextInput
                      style = {styles.titleStyle}
                      autoCorrect
                      value={this.state.title}
                      onChangeText={title => this.setState({ title})}
                      placeholder = 'Title'
                      placeholderTextColor= {colorway.one}
                      />
                    {/*Note Input*/}
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
                                title: this.state.title,
                                dueDate: this.state.date_time,
                              };
                              console.log('NEW NOTE =======', newNote);
                              insertNewNote(newNote, this.state.paneID);
                                if (this.state.date_time !== '') {
                                PushNotification.localNotificationSchedule({
                                  message: 'Note Expiring', // (required)
                                  date: this.state.date_time,
                                  data: {},
                                });
                              }
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
                    is24Hour={false}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                  />


            </Container>
        );
    }
}
