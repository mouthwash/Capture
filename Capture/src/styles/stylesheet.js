const colorway = {
  one: '#0277BD',
  two: '#CFD8DC',
  three: '',
  background: '#90A4AE',
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
  },

  cardItemStyle: {
    backgroundColor: colorway.two,
    margin: 5,
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
  }

};


export {
  styles,
  colorway,
};
