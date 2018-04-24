import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { MenuProvider } from 'react-native-popup-menu';
import NewNote from './src/components/NewNote';
import NotePanes from './src/components/NotePanes';
import ExistingNote from './src/components/ExistingNote';

export default class App extends Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}

const AppNavigator = StackNavigator({
    NotePanesScreen: {
        screen: NotePanes,
        navigationOptions: {
            header: null,
            title: 'Home',
        },
    },
    NewNoteScreen: {
        screen: NewNote,
        navigationOptions: ({ navigation }) => ({
            header: null,
            title: 'New note',
        }),
    },
    ExistingNoteScreen: {
        screen: ExistingNote,
        navigationOptions: {
            header: null,
            title: 'Open Note',
        },
    },
    initialRouteName: 'NotePanesScreen'
});
