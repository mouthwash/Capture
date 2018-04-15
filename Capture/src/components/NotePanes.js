import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
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
        { id: 0, name: 'Urgent', notes: ['Hi', 'Ok Its Not Bad'] },
        { id: 1, name: 'School', notes: [] },
        { id: 2, name: 'Useless Things', notes: [] },
        { id: 3, name: 'Even more Useless', notes: [] }
      ],
      paneName: 'Title',
    };
  }

  changedPane = (index) => {
        this.setState({ paneName: this.state.dataset[index].name });
      }

  renderItem({ item, index }) {
    return (
      <Card style={styles.cardStyle}>
        <Content>
        {
           item.notes.map((item2, index2) => (
               <CardItem
                 bordered
                 key={index2}
               >
                  <Body>
                      <Text>
                         {item2}
                      </Text>
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
        <Header style={styles.headerStyle}>
            <Left style={styles.positionStyle}>
                <Button transparent>
                  <Icon type='Feather' name='menu' />
                </Button>
            </Left>
            <Body style={styles.positionStyle}>
                <Button transparent>
                    <Text style={styles.textStyle}>{this.state.paneName}</Text>
                </Button>
            </Body>
            <Right style={styles.positionStyle}>
                <Button
                  transparent
                  onPress={() => this.props.navigation.navigate('NewNoteScreen')}
                >
                <Icon type='Feather' name='plus' />
                </Button>
            </Right>
        </Header>
        <Carousel
          data={this.state.dataset}
          renderItem={this.renderItem.bind(this)}
          itemWidth={Dimensions.get('window').width}
          sliderWidth={Dimensions.get('window').width}
          ref={(carousel) => { this.carousel = carousel; }}
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
  },
  headerStyle: {
    backgroundColor: '#263238',
  },
  positionStyle: {
    flex: 1,
  },
};
