
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StackNavigator } from 'react-navigation';
import NewNote from './NewNote';
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
        <Header>
            <Left>
                <Button transparent>
                    <Text>
                        Random text
                    </Text>
                </Button>
            </Left>
            <Body>
                <Button transparent>
                    <Text>{item.name}</Text>
                </Button>
            </Body>
            <Right>
                <Button transparent
                    
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
          renderItem={this.renderItem}
          itemWidth={Dimensions.get('window').width}
          sliderWidth={Dimensions.get('window').width}
        />
      {this.pagination}
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
  headerItemStyle: {
    justifyContent: 'center',
  },
};
