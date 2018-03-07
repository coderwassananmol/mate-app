/*
  Default StyleSheet for the whole application.
  Todo task: Separate all the styles from the application here.
*/

import {StyleSheet,Platform} from 'react-native'
const Styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor : '#fff',
      justifyContent : 'center',
      marginTop: 20
  },
  keyContainer : {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor : '#4c69a5'
  },
  logo:   {
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:20
  },
  register:{
  marginBottom:20,
  alignItems:'center',
  justifyContent:'center',
  height:50,
  backgroundColor: '#ffae'
},
  button : {
      backgroundColor: '#000',
      alignItems: 'center',
      margin: 10
  },
  buttonText : {
      margin : 20,
      textAlign : 'center',
      color : '#62fce5'
  },
  clientimage : {
    width: '100%',
    opacity: 0.5,
    height: '100%',
    justifyContent: 'center',
    flex: 1
  },
  clienttext: {
    backgroundColor : 'transparent',
    textAlign: 'center',
    color: '#000'
  },
  clienttouchable : {
    flex: 1,
    width: '100%'
  },
  drawer1 : {
    backgroundColor : '#59aaf8',
    flex: 1,
  },
  drawer1Component : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  drawer1Text : {
    textAlign : 'center',
    color: '#ffffff'
  },
  drawer1Image : {
    
  },
  drawer1Button : {
    backgroundColor : '#644afe',
    color: '#fff',
  },
  NavBarContainer: {
    height: (Platform.OS === 'ios') ? 64 : 54,
    flexDirection: 'row',
    paddingTop: 20,
  },
  NavBarItem: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default Styles;
