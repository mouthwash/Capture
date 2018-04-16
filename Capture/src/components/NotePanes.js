import React, { Component } from 'react';
import { Dimensions, Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Tabs from 'react-native-tabs';
import {
    Card,
    CardItem,
    Text,
    Container,
    Header,
    Body,
    Content,
    Left,
    Right,
    Icon,
    Button
} from 'native-base';

export default class NotePanes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: [
                { id: 0, name: 'Urgent', notes: ['Pick up daughter from school', 'Finish capstone assignment', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum.'] },
                { id: 1, name: 'School', notes: ['Science project due in 3 weeks', 'Read textbook pages 20-30'] },
                { id: 2, name: 'Reminders', notes: ['Apple is on the fridge', 'Email boss about the raise', 'Meeting Sasha for dinner at 7'] }
            ]
        };
    }

    renderItem({ item, index }) {
        return (
            <Card style={styles.cardStyle}>
                <Header style={styles.headerStyle}>
                    <Left style={styles.positionStyle}>
                        <Button transparent
                            onPress={() => this.props.navigation.navigate('NewPaneScreen')}
                        >
                            <Icon type='Ionicons' name='paper' style={styles.iconStyle} />
                        </Button>
                    </Left>
                    <Body style={styles.positionStyle}>
                        <Button transparent>
                            <Text style={styles.textStyle}>{item.name}</Text>
                        </Button>
                    </Body>
                    <Right style={styles.positionStyle}>
                        <Button transparent
                          onPress={() => this.props.navigation.navigate('NewNoteScreen')}
                        >
                            <Icon type='Feather' name='plus' style={styles.iconStyle} />
                        </Button>
                    </Right>
                </Header>

                <Content>
                {
                    item.notes.map((item2, index2) => (
                        <CardItem
                            bordered
                            key={index2}
                        >
                            <Body>
                                <Text>{item2}</Text>
                            </Body>
                        </CardItem>
                    ))
                }
                </Content>
            </Card>
        );
    }

    render() {
        return (
            <Container>
                <Carousel
                    data={this.state.dataset}
                    renderItem={this.renderItem.bind(this)}
                    itemWidth={Dimensions.get('window').width}
                    sliderWidth={Dimensions.get('window').width}
                />
            </Container>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 20,
        color: 'white',
    },
    cardStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: '#e6e9ef'
    },
    headerStyle: {
        backgroundColor: '#06317c'
    },
    positionStyle: {
        flex: 1,
    },
    iconStyle: {
        color: 'white'
    },
};
