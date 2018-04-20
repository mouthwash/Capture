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
import { insertNewNotePane } from '../database/allSchemas';

export default class NewPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        const { goBack } = this.props.navigation;
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
                      multiline
                      autoFocus
                      autoCorrect
                      underlineColorAndroid='transparent'
                      onChangeText={text => this.setState({ text })}
                      value={this.state.text}
                    />
                    <View style={styles.buttonStyle}>
                        <Button
                            success
                            onPress={() => {
                              const key = Math.floor(Date.now() / 1000);
                              const newPane = {
                                id: key,
                                paneName: this.state.text,
                                notes: [{}],
                              };
                              console.log('NEW PANE =======', newPane);
                              insertNewNotePane(newPane);
                              goBack();

                          }
                        }
                        >
                            <Text style={{ color: 'white' }}> Submit </Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
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
        fontSize: 20,
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
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },
    buttonStyle: {
        position: 'absolute',
        paddingLeft: 20,
        paddingBottom: 20,
        bottom: 0,
    }
};
