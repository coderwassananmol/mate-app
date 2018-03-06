import React from 'react';
import Styles from '../styles/RetailerStyle';
import { View,
        TextInput,
        Dimensions,
        ScrollView,
        Image,
        Animated,
        TouchableHighlight,
        Keyboard,
        KeyboardAvoidingView,
        Platform,
        AsyncStorage
      } from 'react-native';
/*
      The logo of MATE
*/
import logo from '../assets/mate.jpg';
/*
      Custom Modal
*/
import Modal from 'react-native-modal'
/*
      Native base components
*/
import { 
  Container, Spinner, Row, Badge, Card, Grid, Col, List, ListItem, CardItem, Label, Root, ActionSheet, Header, 
  Title, Input, Item, Subtitle, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text 
} from 'native-base';

import { connect } from 'react-redux';
/*
      LoginUser action
*/
import {LoginUser} from '../actions/UserLogin';
import {Actions} from 'react-native-router-flux';

/*
      Controlling the image size and dimensions
*/
const window = Dimensions.get('window');

const IMAGE_HEIGHT = window.width/2;
const IMAGE_HEIGHT_SMALL = window.width/5;

class Login extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            fontLoaded : false,
            clicked : false
        };
        this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    }

    componentWillMount() {
            this.setState({
                fontLoaded  :  true,
                username : '',
                password: '',
                usernameError : false,
                passwordError: false,
                isFetching : false
        });

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

    /*
      The function compares the current props and next props received and takes action accordingly.
        * If the data is fetching, it shows the spinner.
        * If the data has fetched, then if hasError is true, it shows a toast with error message.
        * Else, it redirects the user to dashboard. - Todo
    */

    componentWillReceiveProps(nextProps) {
      const {isFetching, data, hasError, errorMessage} = this.props.login;
      if(isFetching === null && nextProps.login.isFetching === true) {
        this.setState({
          isFetching : true
        });
      }
      else if(isFetching === true && nextProps.login.isFetching === false) {
        this.setState({
          isFetching : false
        })
        if(nextProps.login.hasError === false) {
          console.log(nextProps.login.data);
        }
        else {
          Toast.show({
            text: nextProps.login.errorMessage,
            position: 'bottom',
            buttonText: 'Okay',
            duration : 5000,
            type:'danger'
          });
        }
      }
    }

    /*
      * Controlling the image height with keyboard actions
      * DO NOT TOUCH!
    */

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

    /*
      Checks if the fields are empty on login button pressed.
        * If they are empty, error is shown.
        * Else, the LoginUser action is called.
    */

    checkIfEmpty() {
      if(this.state.username == '' || this.state.password == '') {
        if(this.state.username == '') {
          this.setState({usernameError : true});
        }
        if(this.state.password == '') {
          this.setState({passwordError : true});
        }
      }
      else {
        this.setState({
          usernameError : false,
          passwordError : false
        });
        this.props.LoginUser(this.state.username,this.state.password);
      }
    }

    login_success(token) {
      AsyncStorage.setItem('email_token',token);
      console.log("Logged in!");
    }

    render() {
      return(
          <Container>
            <Header searchBar rounded backgroundColor='#2c70dd' iosBarStyle='dark-content' androidStatusBarColor='#56a2ce'>
              <Body style={{display: this.state.header}}>
                <Title>Login to MATE</Title>
              </Body>
            </Header>
            <Content>
              <Animated.Image source={logo} style={[Styles.logo, { height: this.imageHeight }]} />
              <ScrollView style={{flex: 1}} keyboardShouldPersistTaps='always'>
                <View style={{justifyContent:'center'}}>
                  <Item floatingLabel error={this.state.usernameError} style={this.state.usernameError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
                    {this.state.usernameError ? <Icon name='close-circle'/> : null}
                    <Label>Username/E-Mail</Label>
                    <Input
                      onChangeText = {(username) => this.setState({username : username})}
                      style={{fontSize:17,color: '#000',marginTop:15,textAlign:'center'}}
                    />
                  </Item>
                  <Item floatingLabel error={this.state.passwordError} style={this.state.passwordError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
                    {this.state.passwordError ? <Icon name='close-circle'/> : null}
                    <Label>Password</Label>
                    <Input
                      onChangeText = {(password) => this.setState({password : password})}
                      style={{fontSize:17,color: '#000',marginTop:15,textAlign:'center'}}
                      secureTextEntry
                    />
                </Item>
                  <Button 
                    style={{alignSelf:'center',marginBottom:20,marginTop:20}}
                    onPress={this.checkIfEmpty.bind(this)}
                    block>
                      <Text style={{textAlign:'center'}}>Login</Text>
                  </Button>
                  <Text style={{textAlign:'center'}}> -- Or Login with below providers -- </Text>
                  <Grid>
                    <Col style={{alignItems:'center'}}>
                      <Icon name='logo-facebook' style={{color: '#3B5998',fontSize:50}}/>
                    </Col>
                    <Col style={{alignItems:'center'}}>
                      <Icon name='logo-googleplus' style={{color: '#d34836',fontSize:50}} />
                    </Col>
                    <Col style={{alignItems:'center'}}>
                      <Icon name='logo-linkedin' style={{color: '#0077b5',fontSize:50}}/>
                    </Col>
                  </Grid>
                  <Modal 
                    style={{alignItems:'center',justifyContent:'center'}} 
                    isVisible={this.state.isFetching}>
                      <Spinner color='red' />
                  </Modal>
                  </View>
              </ScrollView>
            </Content>
            <Button 
              full
              success
              onPress={() => Actions.EmailRegistration()}>
                <Text style={{textAlign:'center',textAlignVertical:'center'}}>New to MATE?</Text>
            </Button>
          </Container>
      );
    }
}

/*
  Redux function to map the login state to login prop.
*/
function mapStateToProps(state) {
  return {
    login : state.User
  }
}

/*
  Connect the props to the Login class.
*/
export default connect(mapStateToProps,{LoginUser})(Login);
