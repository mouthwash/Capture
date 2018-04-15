import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import { Dimensions, ScrollView, FlatList } from 'react-native';
import { noteChanged } from '../actions';

const newNotePane = {
  id: Math.floor(Date.now() / 1000),
  name: 'TESTING',
  creationDate: new Date()
};

class AllNotePanes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Title'
    };
}

renderPanes(text) {
  return (
  <Card style={styles.cardStyle}>
    <CardItem style={styles.cardItemStyle}>
        <Text
          style={styles.textStyle}
        >
          {this.state.name}
        </Text>
     </CardItem>
     <CardItem style={styles.cardItemStyle}>
         <Text
           style={styles.textStyle}
         >
           {this.state.name}
         </Text>
      </CardItem>
      <CardItem style={styles.cardItemStyle}>
          <Text
            style={styles.textStyle}
          >
            {this.state.name}
          </Text>
       </CardItem>
       <CardItem style={styles.cardItemStyle}>
           <Text
             style={styles.textStyle}
           >
             {this.state.name}
           </Text>
        </CardItem>
   </Card>

 );
}

  render() {
    return (

      <Container>
          <Header>
            <Right>
              <Button>
                <Text>Add</Text>
              </Button>
            </Right>
            </Header>
            <ScrollView horizontal pagingEnabled>
              {this.renderPanes()}
              {this.renderPanes()}
              {this.renderPanes()}
              {this.renderPanes()}
              {this.renderPanes()}
            </ScrollView>
      </Container>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 20,
  },
  cardStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  cardItemStyle: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
  },
};

export default AllNotePanes;
