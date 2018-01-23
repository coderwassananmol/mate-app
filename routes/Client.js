import React from 'react';
import { Font } from 'expo';
import AppLoading from 'expo/src/launch/AppLoading';
import Styles from '../styles/RetailerStyle';
import { View,
        TextInput,
        Text,
        Dimensions,
        ScrollView,
        Image,
        Button,
        Animated,
        TouchableHighlight,
        Keyboard,
        KeyboardAvoidingView,
        Platform,
        ActivityIndicator,
        DrawerLayoutAndroid,
        TouchableNativeFeedback,
        ImageBackground,
        TouchableWithoutFeedback,
        TouchableOpacity
      } from 'react-native';
import { connect } from 'react-redux';
import {EmailVerify} from '../actions/EmailVerify';
import {Actions} from 'react-native-router-flux';

export default class Client extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              fontLoaded : false,
          };
      }
  
      componentWillMount() {
          (async() => {
              await Font.loadAsync({
                  'raleway-light' :  require('../assets/fonts/Raleway-Light.ttf'),
                  'raleway-medium':  require('../assets/fonts/Raleway-Medium.ttf'),
                  'opensans-bold' :  require('../assets/fonts/OpenSans-Bold.ttf')
              });
              this.setState({
                  fontLoaded  :  true,
                  email : '',
                  emailValid : true,
                  emailValidColor : '#55d841'
              });
          })();
        }

        render() {
            const resizeMode = 'center';
            if(!this.state.fontLoaded) {
                return <AppLoading />;
            }
            var navigationView = (
                <View style={Styles.drawer1}>
                    <View style={Styles.drawer1Component}>
                        <Image source={require('../assets/B.png')} style={Styles.drawer1Image}/>
                        <Text style={[Styles.drawer1Text,{fontFamily : 'raleway-medium'}]}>Beardo Man</Text>
                        <Text style={[Styles.drawer1Text,{fontFamily : 'raleway-medium'}]}>beardoman@company.com</Text>
                    </View>
                    <View style={Styles.drawer1Component}>
                        <Button style={Styles.drawer1Button} onPress={() => console.log("dfs")} title="Team Management" />
                    </View>
                </View>
              );
              var TEAM = 'https://theundercoverrecruiter.com/wp-content/uploads/2015/11/team-e1485790781283.jpg';
              var MARKETING = 'http://www.essec.edu/media/cache/5e/fd/5efd21306675991eb6bd2858d1ea826f.jpg';
              var PRODUCTIVITY = 'https://financialtribune.com/sites/default/files/field/image/07-FF-productivity%20268-ab.png';
              var BUSINESS = 'https://theundercoverrecruiter.com/wp-content/uploads/2015/11/team-e1485790781283.jpg';
            return (
            <View style={Styles.container}>
                <TouchableOpacity style={Styles.clienttouchable} onPress={() => Actions.Team()}>
                    <ImageBackground resizeMode='cover' style={Styles.clientimage} source={{uri: TEAM}}>
                        <Text style={[Styles.clienttext,{fontFamily: 'opensans-bold'}]}>TEAM MANAGEMENT</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.clienttouchable}>
                    <ImageBackground resizeMode='cover' style={Styles.clientimage} source={{uri: MARKETING}}>
                        <Text style={[Styles.clienttext,{fontFamily: 'opensans-bold'}]}>MARKETING MANAGEMENT</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.clienttouchable}>
                    <ImageBackground resizeMode='cover' style={Styles.clientimage} source={{uri: PRODUCTIVITY}}>
                        <Text style={[Styles.clienttext,{fontFamily: 'opensans-bold'}]}>PRODUCTIVITY</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.clienttouchable}>
                    <ImageBackground resizeMode='cover' style={Styles.clientimage} source={{uri: BUSINESS}}>
                        <Text style={[Styles.clienttext,{fontFamily: 'opensans-bold'}]}>BUSINESS MANAGEMENT</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            );
        }
    }
