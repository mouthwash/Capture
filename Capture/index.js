import { AppRegistry } from 'react-native';
import Header from './src/components/header';
import React from 'react';

// Create component
const App = (props) => (
    <Header headerText={'Urgent'} />
);

// Render to device
AppRegistry.registerComponent('Capture', () => App);
