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
  Title,
  Content,
  Left,
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
        <Content>
        <CardItem
          header
          bordered
          style={styles.headerItemStyle}
        >
        <Button transparent>
            <Text style={styles.textStyle}>{item.name}</Text>
          </Button>
         </CardItem>
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
