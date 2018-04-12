import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StackNavigator } from 'react-navigation';
import {
  Card,
  CardItem,
  Text,
  Container,
  Header,
  Body,
  Title,
  Content,
  Left,
  Right,
  Center,
  Icon,
  Button
} from 'native-base';
import NewNote from './NewNote';


export default class NotePanes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: [
        { name: 'Urgent', notes: ['Hi', 'Ok Its Not Bad'] },
        { name: 'School', notes: [] },
        { name: 'Useless Things', notes: [] },
        { name: 'Even more Useless', notes: [] }
      ]
    };
  }

  renderItem({ item, index }) {
    return (
      <Card style={styles.cardStyle}>
        <Header style={styles.headerStyle}>
            <Left style={styles.positionStyle}>
                <Button transparent>
                  <Icon type='Feather' name='menu' />
                </Button>
            </Left>
            <Body style={styles.positionStyle}>
                <Button transparent>
                    <Text>{item.name}</Text>
                </Button>
            </Body>
            <Right style={styles.positionStyle}>
                <Button
                  transparent
                  onPress={() => this.props.navigation.navigate('NewNote')}
                >
                <Icon type='Feather' name='plus' />
                </Button>
            </Right>
        </Header>
        <Content>
        {
           item.notes.map((item2, index2) => {
             return (
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
            );
           })
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
  },
  positionStyle: {
    flex: 1,
  },
};
