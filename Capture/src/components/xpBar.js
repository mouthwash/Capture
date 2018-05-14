import React, { Component } from 'react';
import {Container, Content, Text} from 'native-base';
import { Dimensions} from 'react-native';

import * as Progress from 'react-native-progress';
import { getXP, createXP } from '../database/allSchemas';

import { styles, colorway, colorone, colortwo, backgroundcolor } from '../styles/stylesheet';

export default class xpBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPercentBar: this.props.currentPercentFromParent,
    };
    // getXP().then((xpData) => {
    //   this.setState({ currentPercentBar: xpData.xpPercent });
    //   console.log('WHENRELOADDATA PERCENT ==', this.state.currentPercentBar);
    // });
  }

  componentWillReceiveProps() {
    this.setState({ currentPercentBar: this.props.currentPercentFromParent });
  }
  render() {
    console.log('PERCENTINXPBAR==========!!!!', this.state.currentPercentBar);
    return (
      <Container>
        <Content>
          <Progress.Bar
            progress={this.state.currentPercentBar}
            width={null}
            height={10}
            color={colortwo}
            borderColor={backgroundcolor}
          />
        </Content>
      </Container>
    );
  }
}
