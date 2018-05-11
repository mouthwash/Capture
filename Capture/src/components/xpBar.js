import React, { Component } from 'react';
import {Container, Content, Text} from 'native-base';
import { Dimensions} from 'react-native';

import * as Progress from 'react-native-progress';

import { styles, colorway } from '../styles/stylesheet';

export default class xpBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Progress.Bar
            progress={0.3}
            width={null}
            height={10}
            color={colorway.two}
            borderColor={colorway.background}
            />
        </Content>
      </Container>
    );
  }
}
