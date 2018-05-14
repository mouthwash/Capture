import React, { Component } from 'react';
import {Container, Content, Text} from 'native-base';

import { styles, colorway } from '../styles/stylesheet';
import { getXP } from '../database/allSchemas';

export default class Level extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLevelState: this.props.currentLevelFromEXP,
    };
  }

  componentWillReceiveProps() {
    getXP().then((xpData) => {
      this.setState({ currentLevelState: xpData.level });
    });
    this.setState({ currentLevelState: this.props.currentLevelFromEXP });
    console.log('LEVELOFSTATE', this.state.currentLevelState);
  }

  render() {
    return (
      <Container>
        <Content>
          <Text style={styles.levelText}>Level</Text>
          <Text style={styles.levelText}>{this.state.currentLevelState}</Text>
        </Content>
      </Container>
    );
  }
}
