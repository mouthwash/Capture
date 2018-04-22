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

//import styles
import styles from '../styles/stylesheet';

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
                      placeholder='Enter Title Here'
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
