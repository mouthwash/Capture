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
              onPress={() => this.datepick.show()}
              >
              <Icon type='Feather' name='clock' style={styles.iconStyle} />
            </Button>
          </Right>
        </Header>

        <Content>
          {/*Title Input*/}
          <View style={{ alignItems: 'center' }}>
            <View style={styles.titleStyle}>
              <TextInput
                style={{ fontSize: 24 }}
                autoCorrect
                value={this.state.title}
                onChangeText={title => this.setState({ title })}
                placeholder='Title'
              />
            </View>
          </View>
          {/*Note Input*/}
          <TextInput
            style={styles.inputStyle}
            placeholder='Things to do...'
            multiline
            autoFocus
            autoCorrect
            underlineColorAndroid='transparent'
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <View>
            <PopupDialog
              ref={(datepick) => { this.datepick = datepick; }}
              dialogAnimation={slideAnimation}
              dialogTitle={<DialogTitle title="Set a reminder" />}
              haveOverlay={false}
              >
              {/* User chooses a date */}
              <View style={styles.datePicker}>
                <DatePicker
                  date={this.state.date}
                  mode="date"
                  placeholder="Select date"
                  format="MM-DD-YYYY"
                  minDate="01-01-2018"
                  maxDate="12-31-2025"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                  }}
                  onDateChange={(date) => {
                    this.setState({ date: date });
                    this.popupDialog.dismiss();
                  }}
                  onCloseModal={() => {
                    this.popupDialog.show();
                  }}
                  />
                {/* User chooses a time */}
                <DatePicker
                  date={this.state.date}
                  mode="time"
                  placeholder="Select time"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                  }}
                  onDateChange={(date) => {
                    this.setState({time: date});
                    this.popupDialog.dismiss();
                  }}
                  />
              </View>
            </PopupDialog>
          </View>
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
                  priority: 0,
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

    </Container>
  );
}
}
