import {StyleSheet,Platform} from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const Styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor : '#fff',
      justifyContent : 'center',
      marginTop: 20,
  },
  keyContainer : {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor : '#4c69a5'
  },
  newtomate : {
    fontSize : responsiveFontSize(2.8),
    textAlign : 'center',
    padding : 10,
    color : '#42f459',
    backgroundColor : '#323533',
    margin : 10
  },
  simpletext : {
    fontSize : responsiveFontSize(2.3),
    textAlign : 'center',
    padding : 5
  },
  dlnumber : {
      textAlign: 'center',
      marginHorizontal: 10,
      marginVertical: 5,
      color: '#000',
      fontSize: responsiveFontSize(2.8),
      height: responsiveHeight(12),
      width: responsiveWidth(100),
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
      margin: 10,
      height: responsiveHeight(8),
      width : responsiveWidth(40)
  },
  buttonText : {
      margin : 20,
      textAlign : 'center',
      color : '#62fce5',
      fontSize : responsiveFontSize(2)
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
    fontSize: responsiveFontSize(3),
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
    color: '#ffffff',
    fontSize: responsiveFontSize(2)
  },
  drawer1Image : {
    height : responsiveHeight(20),
    width: responsiveWidth(25),
  },
  drawer1Button : {
    backgroundColor : '#644afe',
    color: '#fff',
    width: responsiveWidth(100)
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
