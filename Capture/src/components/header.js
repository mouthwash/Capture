// Import necessary libraries
import React from 'react';
import {
  Text,
  View
} from 'react-native';

// Make header component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
         backgroundColor: '#6327d1',
         justifyContent: 'center',
         alignItems: 'center',
         height: 60,
         paddingTop: 15,
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 5 },
         shadowOpacity: 0.5,
         elevation: 2,
         position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: 'white'
    }
}

// Make header available to other parts of the app
export default Header;
