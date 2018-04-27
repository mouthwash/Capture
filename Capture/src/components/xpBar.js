import React, { Component } from 'react';
import {Container, Content, ProgressBar} from 'native-base';

export default class xpBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ProgressBar progress={30} />
        </Content>
      </Container>
    );
  }
}
