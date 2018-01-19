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
import { connect } from 'react-redux';
import {EmailVerify} from '../actions/EmailVerify';
import {Actions} from 'react-native-router-flux';

class EmailRegistration extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              fontLoaded : false,
              clicked : false
          };
      }
  
      componentWillMount() {
          (async() => {
              await Font.loadAsync({
                  'raleway-light' :  require('../assets/fonts/Raleway-Light.ttf'),
                  'raleway-medium':  require('../assets/fonts/Raleway-Medium.ttf'),
              });
              this.setState({
                  fontLoaded  :  true,
                  email : '',
                  emailValid : true,
                  emailValidColor : '#55d841'
              });
          })();
        }

        checkIfEmail(email) {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const checkmail = /@(gmail|yahoo|rediff|outlook|facebook|google|mail|yandex|hotmail)/;
            if(!pattern.test(email)) {
                this.setState({emailValid : false, emailValidColor : '#ea3131'});
            }
            else {
                if(!checkmail.test(email)) {
                    this.setState({emailValid : true, emailValidColor : '#55d841',email : email});
                }
            }
        }

        onPress() {
            if(this.state.emailValid && this.state.email != '') {
                this.setState({emailValid : true, emailValidColor : '#55d841'});
                this.props.EmailVerify(this.state.email);
                Actions.EmailTokenVerify();
            }
            else {
                this.setState({emailValid : false, emailValidColor : '#ea3131'});
            }
        }

        render() {
            const {isFetching,data,hasError,errorMessage} = this.props.user;
            if(!this.state.fontLoaded) {
                return <AppLoading />;
            }
            return (
            <View style={Styles.container}>
                <KeyboardAvoidingView behaviour='padding' style={{alignItems:'center'}}>
                    <TextInput
                        placeholder = "Enter E-Mail"
                        style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
                        onChangeText = {(email) => this.checkIfEmail(email)}
                        underlineColorAndroid={this.state.emailValidColor}
                    />
                    <TouchableHighlight style={Styles.button} onPress={this.onPress.bind(this)}>
                        <Text style={[Styles.buttonText, {fontFamily : 'raleway-medium'}]}>SUBMIT</Text>
                    </TouchableHighlight>
                    {
                        this.state.emailValid ? null : <Text style = {[Styles.simpletext,{fontFamily : 'raleway-light',color: this.state.emailValidColor}]}>Email address is invalid</Text>
                    }
                    </KeyboardAvoidingView>
                    {
                        isFetching == null ? null :
                          isFetching ?
                          <View style={Styles.container}>
                            <ActivityIndicator />
                          </View> :
                          !hasError ?
                          <View style={Styles.container}>
                            <Text>{data}</Text>
                          </View> :
                          <View style={Styles.container}>
                            <Text>{errorMessage.email}</Text>
                          </View>
                    }
            </View>
            );
        }
    }

    function mapStateToProps(state) {
        return {
          user : state.EmailVerify
        }
    }
      
export default connect(mapStateToProps,{EmailVerify})(EmailRegistration);