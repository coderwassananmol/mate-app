import {StyleSheet} from 'react-native'
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
  }
});

export default Styles;
