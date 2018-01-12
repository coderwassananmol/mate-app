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
        ActivityIndicator
      } from 'react-native';
import logo from '../assets/mate.jpg';
import { connect } from 'react-redux';
import {FetchUser} from '../actions/FetchUser';
const window = Dimensions.get('window');

const IMAGE_HEIGHT = window.width / 2;
const IMAGE_HEIGHT_SMALL = window.width /5;

class User extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            fontLoaded : false,
            clicked : false
        };
        this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    }

    componentWillMount() {
        (async() => {
            await Font.loadAsync({
                'raleway-light' :  require('../assets/fonts/Raleway-Light.ttf'),
                'raleway-medium':  require('../assets/fonts/Raleway-Medium.ttf'),
            });
            this.setState({
                fontLoaded  :  true,
                username : '',
                password: '',
                usernameReq : true,
                passwordReq : true,
                colorReq : '#55d841'
            });
        })();

        if(Platform.OS == 'ios') {
          this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
          this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
        }
        else {
          this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
          this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
        }
    }

    componentWillUnmount() {
      this.keyboardWillShowSub.remove();
      this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = (event) => {
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT_SMALL,
      }).start();
    };

    keyboardWillHide = (event) => {
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT,
      }).start();
    };

    keyboardDidShow = (event) => {
      Animated.timing(this.imageHeight, {
        toValue: IMAGE_HEIGHT_SMALL,
      }).start();
    };

    keyboardDidHide = (event) => {
      Animated.timing(this.imageHeight, {
        toValue: IMAGE_HEIGHT,
      }).start();
    };

    checkIfEmpty() {
      if(this.state.username == '' || this.state.password == '') {
        if(this.state.username == '') {
          this.setState({usernameReq: false});
          this.setState({colorReq : '#ea3131'});
        }
        if(this.state.password == '') {
          this.setState({passwordReq : false});
          this.setState({colorReq : '#ea3131'});
        }
      }
      else {
        this.props.FetchUser(this.state.username);
      }
    }

      checkIfUsernameEmptyOnBlur() {
        if(this.state.username == '') {
          this.setState({usernameReq: false});
          this.setState({colorReq : '#ea3131'});
        }
      }

      checkIfPasswordEmptyOnBlur() {
        if(this.state.username == '') {
          this.setState({passwordReq: false});
          this.setState({colorReq : '#ea3131'});
      }
    }

    render() {
      const {isFetching,data} = this.props.user;
      if (!this.state.fontLoaded) {
            return <AppLoading />;
        }
      return(
        <View style={Styles.container}>
          <Animated.Image source={logo} style={[Styles.logo, { height: this.imageHeight }]} />
          <ScrollView style={{flex: 1}}>
            <KeyboardAvoidingView behaviour='padding' style={{alignItems:'center'}}>
              <TextInput
                placeholder = "Enter Username"
                style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
                onChangeText = {(username) => this.setState({username : username})}
                underlineColorAndroid={this.state.colorReq}
                onBlur={this.checkIfUsernameEmptyOnBlur.bind(this)}
              />
              {!this.state.usernameReq ? <Text style={{color: '#ea3131'}}>* REQUIRED</Text> : null}
              <TextInput
                placeholder = "Enter Password"
                style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
                onChangeText = {(password) => this.setState({password : password})}
                underlineColorAndroid={this.state.colorReq}
                onBlur={this.checkIfUsernameEmptyOnBlur.bind(this)}
                secureTextEntry
              />
              {!this.state.passwordReq ? <Text style={{color: '#ea3131'}}>* REQUIRED</Text> : null}
              <TouchableHighlight style={Styles.button} onPress={this.checkIfEmpty.bind(this)}>
                <Text style={[Styles.buttonText, {fontFamily : 'raleway-medium'}]}>SUBMIT</Text>
              </TouchableHighlight>
              {
                isFetching == null ? null :
                  isFetching ?
                  <View style={Styles.container}>
                    <ActivityIndicator />
                  </View> :
                  <View style={Styles.container}>
                    <Text>Licensenumber: {data.licensenumber}</Text>
                    <Text>User: {data.name}</Text>
                  </View>
                }
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      )
    }
}

function mapStateToProps(state) {
  return {
    user : state.user
  }
}

export default connect(mapStateToProps,{FetchUser})(User);
