import React, { Component } from 'react';
import {Container, Content, Text} from 'native-base';

import { styles, colorway } from '../styles/stylesheet';

export default class Level extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text style={styles.levelText}>Level</Text>
          <Text style={styles.levelText}>2</Text>
        </Content>
      </Container>
    )
  }
}
