import { Dimensions } from 'react-native';

const colorway = {
  one: '#1A63FF',
  two: '#7FA8FF',
  three: '',
  background: 'white',
}

const styles = {

  headerStyle: {
    backgroundColor: colorway.one,
  },

  cardStyle: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: colorway.background,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  cardItemStyle: {
    backgroundColor: colorway.two,
    marginTop: 5,
    marginRight: 5,
    marginBottom: 0,
    marginLeft: 5,
  },

  textStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 'auto',
  },

  positionStyle: {
    flex: 1,
  },

  iconStyle: {
    color: 'white'
  },

  newPaneStyle: {
    padding: 10,
  },

  inputStyle: {
      textAlignVertical: 'top',
      fontSize: 20,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 20,
      width: '100%'
  },

  titleStyle: {
    fontSize: 24,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    width: '100%'
  },

  footerStyle: {
      backgroundColor: 'transparent',
  },

  iconStyle: {
      color: 'white'
  },

  containerStyle: {
    flex: 1,
    alignItems: 'flex-start',
  },

  buttonStyle: {
    position: 'absolute',
    paddingLeft: 20,
    paddingBottom: 20,
    bottom: 0,
  },

  datePicker: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
  },

  barStyle: {
    padding: 5,
    width: '80%',
    height: 'auto',
  },

  levelStyle: {
    padding: 5,
    width: '20%',
    height: 'auto',
  },

};


export {
  styles,
  colorway,
};
