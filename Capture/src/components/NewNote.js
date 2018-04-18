import React, { Component } from 'react';
import { TextInput, DatePickerIOS, DatePickerAndroid, View } from 'react-native';
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
            date: new Date(),
            showDatePicker: false,   /* Initially hides date picker */
            currentNote: ''
        };

        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({date: newDate})
    }

    render() {
        const {goBack} = this.props.navigation;

        var showDatePicker = this.state.showDatePicker ?
            <DatePickerIOS
                style={ styles.datePicker }
                date={this.state.date} onDateChange={(date)=>this.setState({date})}
                mode="date"
            /> : <View />

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
                    <Right >
                        <Button
                            transparent
                            /* Inverts the showDatePicker flag to reveal or hide the date picker */
                            onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}
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
                </Content>
                {showDatePicker} /* Date picker appears here but is initially hidden until clock is pressed */
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
        height: 150,
    }
};
