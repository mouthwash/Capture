import React, { Component } from 'react';
import {Container, Content, Text} from 'native-base';
import { Dimensions} from 'react-native';

import * as Progress from 'react-native-progress';


export default class xpBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Progress.Bar
            progress={0.3}
            width={Dimensions.get('window').width}
            />
        </Content>
      </Container>
    );
  }
}
