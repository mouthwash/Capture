import { Dimensions } from 'react-native';

//default colorway
const colorway = {
  one: '#37474f',
  two: '#d5dee2',
  three: '',
  background: '#56707c',
};

//Colors actually being used.
let colorone = colorway.one
let colortwo = colorway.two
let colorthree = colorway.three
let backgroundcolor = colorway.background

const styles = {

  headerStyle: {
    backgroundColor: colorone,
  },

  footerStyle: {
      backgroundColor: colorone,
  },

  cardStyle: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: backgroundcolor,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  cardItemStyle: {
    backgroundColor: colortwo,
    marginTop: 5,
    marginRight: 5,
    marginBottom: 0,
    marginLeft: 5,
  },

  textStyle: {
    fontSize: 20,
    color: colortwo,
    textAlign: 'center',
    margin: 'auto',
  },

  positionStyle: {
    flex: 1,
  },

  iconStyle: {
    color: colortwo
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

  containerStyle: {
    flex: 1,
    alignItems: 'flex-start',
  },

  buttonStyle: {
    marginLeft: '20%',
    marginBottom: '20%',
    bottom: '20%',
  },

  datePicker: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
  },
  expStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  barStyle: {
    padding: 5,
    width: '80%',
    height: 'auto',
    justifyContent: 'center',
  },

  levelStyle: {
    padding: 5,
    width: '20%',
    height: 'auto',
  },

  levelText: {
    color: colortwo,
    textAlign: 'center',
  },

};


export {
  styles,
  colorway,
  colorone,
  colortwo,
  colorthree,
  backgroundcolor,
};
