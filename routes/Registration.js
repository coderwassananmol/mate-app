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

export default class Registration extends React.Component {
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
            });
        })();
      }

    render() {
      if (!this.state.fontLoaded) {
            return <AppLoading />;
        }
      return (
          /*  <ScrollView style={{flex: 1}}>
              <Text>REGISTER TO MATE</Text>

        </ScrollView> */
        <ScrollView style={{flex: 1}}>
          <KeyboardAvoidingView style={Styles.container} behaviour='padding'>
            <Text style={[Styles.simpletext,{fontFamily : 'raleway-light'}]}>Register to MATE</Text>
            <TextInput
              placeholder = "Enter First Name"
              style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
              multiline={true}
              maxLength = {20}
              onChangeText = {(firstname) => this.setState({firstname : firstname})}
              underlineColorAndroid={this.state.colorReq}

            />
            <TextInput
              placeholder = "Enter Last Name"
              style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
              multiline={true}
              maxLength = {20}
              onChangeText = {(lastname) => this.setState({lastname : lastname})}
              underlineColorAndroid={this.state.colorReq}

            />
            <TextInput
              placeholder = "Enter Password"
              style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
              multiline={true}
              maxLength = {20}
              onChangeText = {(password) => this.setState({password : password})}
              secureTextEntry
              underlineColorAndroid={this.state.colorReq}

            />
            <TextInput
              placeholder = "Confirm Password"
              style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
              multiline={true}
              maxLength = {20}
              secureTextEntry
              onChangeText = {(confirmpassword) => this.setState({confirmpassword : confirmpassword})}
              underlineColorAndroid={this.state.colorReq}

            />
            <TextInput
              placeholder = "Company Name"
              style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
              multiline={true}
              maxLength = {20}
              onChangeText = {(companyname) => this.setState({companyname : companyname})}
              underlineColorAndroid={this.state.colorReq}

            />
            <TextInput
              placeholder = "Your Position"
              style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
              multiline={true}
              maxLength = {20}
              onChangeText = {(position) => this.setState({position : position})}
              underlineColorAndroid={this.state.colorReq}

            />
            <TextInput
              placeholder = "Company Strength"
              style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
              onChangeText = {(companystrength) => this.setState({companystrength : companystrength})}
              keyboardType = 'numeric'
              underlineColorAndroid={this.state.colorReq}

            />
            <TextInput
              placeholder = "Company Domain"
              style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
              multiline={true}
              maxLength = {20}
              onChangeText = {(companydomain) => this.setState({companydomain : companydomain})}
              underlineColorAndroid={this.state.colorReq}

            />
            <TextInput
              placeholder = "Company Registered Address"
              style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
              multiline={true}
              maxLength = {20}
              onChangeText = {(companyaddress) => this.setState({companyaddress : companyaddress})}
              underlineColorAndroid={this.state.colorReq}

            />
            <TextInput
              placeholder = "Phone Number"
              style = {[Styles.dlnumber, {fontFamily : 'raleway-light'}]}
              onChangeText = {(phonenumber) => this.setState({phonenumber : phonenumber})}
              keyboardType = 'phone-pad'
              underlineColorAndroid={this.state.colorReq}
            />
          </KeyboardAvoidingView>
        </ScrollView>
  );
    }
  }
