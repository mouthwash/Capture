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
import realm, { updateNotePane, deleteNotePane, queryAllNotePanes } from '../database/allSchemas';

export default class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            time: "",
            currentNote: ''
        };
    }

    render() {
        const {goBack} = this.props.navigation;

        const slideAnimation = new SlideAnimation ({
            slideFrom: 'bottom',
        });

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
                        <Text style={styles.textStyle}>New Note</Text>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => {
                                this.popupDialog.show();
                            }}
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
                        value={this.state.currentNote}
                    />
                    <View>
                        <PopupDialog
                            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                            dialogAnimation={slideAnimation}
                            dialogTitle={<DialogTitle title="Set a reminder" />}
                            haveOverlay={false}
                        >
                            <View style={styles.datePicker}>
                                <DatePicker /* User chooses a date */
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
                                        this.setState({date: date});
                                        this.popupDialog.dismiss();
                                    }}
                                    onCloseModal = {() => {
                                        this.popupDialog.show();
                                    }}
                                />
                                <DatePicker /* User chooses a time */
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
                        <Button
                            transparent
                            onPress={null}
                        >
                            <Icon type='Feather' name='trash-2' />
                        </Button>

                        <Button
                            transparent
                            onPress={null}
                        >
                            <Icon type='Feather' name='edit-2' />
                        </Button>

                        <Button
                            transparent
                            onPress={null}
                        >
                            <Icon type='Feather' name='image' />
                        </Button>

                        <Button
                            transparent
                            onPress={null}
                        >
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
        elevation: 0,
    },
    inputStyle: {
        textAlignVertical: 'top',
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 15,
        paddingTop: 20,
    },
    iconStyle: {
        color: 'white'
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
    },
    datePicker: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
    }
};
