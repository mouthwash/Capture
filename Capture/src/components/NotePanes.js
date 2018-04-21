import React, { Component } from 'react';
import { Dimensions, Alert, FlatList } from 'react-native';
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
import realm, { getNotePanes, insertNewNotePane } from '../database/allSchemas';

export default class NotePanes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: [],
            currentPaneID: 0,
        };
        realm.addListener('change', () => {
          this.reloadData();
        });
    }

  componentWillMount() {
    getNotePanes().then((data) => {
      this.setState({
        dataset: data,
      });
    }).then(() => {
    if (this.state.dataset.length === 0) {
      console.log('DATA LENGTH ============', this.state.dataset.length);
      const key = Math.floor(Date.now() / 1000);
      const newPane = {
        id: key,
        paneName: 'Urgent',
        notes: [{}],
      };
      console.log('NEW PANE =======', newPane);
      insertNewNotePane(newPane);
      this.setState({ currentPaneID: key });
      console.log('PANE ID=======', key);
    } else {
      this.setState({ currentPaneID: this.state.dataset[0].id });
      console.log('PANE ID=======', this.state.dataset[0].id);
    }
    });
  }

  changedPane = (index) => {
      this.setState({ currentPaneID: this.state.dataset[index].id });
      console.log('PANE ID=======', this.state.dataset[index].id);
  }

  reloadData() {
    getNotePanes().then((data) => {
      this.setState({ dataset: data });
    });
  }
    renderItem({ item, index }) {
        return (
            <Card style={styles.cardStyle}>
                <Header style={styles.headerStyle}>
                    <Left style={styles.positionStyle}>
                        <Button
                          transparent
                          onPress={() => this.props.navigation.navigate('NewPaneScreen')}
                        >
                            <Icon type='Ionicons' name='paper' style={styles.iconStyle} />
                        </Button>
                    </Left>
                    <Body style={styles.positionStyle}>
                        <Button transparent>
                            <Text style={styles.textStyle}>{item.paneName}</Text>
                        </Button>
                    </Body>
                    <Right style={styles.positionStyle}>
                        <Button
                          transparent
                          onPress={() => {
                            this.props.navigation.navigate('NewNoteScreen',
                            { paneID: this.state.currentPaneID });
                          }}
                        >
                            <Icon type='Feather' name='plus' style={styles.iconStyle} />
                        </Button>
                    </Right>
                </Header>

                <Content>
                {
                    item.notes.map((noteItem, indexOfNote) => (
                        <CardItem
                            bordered
                            body
                            button
                            key={indexOfNote}
                            onPress={() => {
                              this.props.navigation.navigate('NewNoteScreen');
                              }
                            }
                        >
                            <Body>
                                    <Text >{noteItem.note}</Text>

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
                onSnapToItem={this.changedPane}
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
