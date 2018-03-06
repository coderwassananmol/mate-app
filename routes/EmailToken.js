import React from 'react';
import Styles from '../styles/RetailerStyle';
import { View,
        ScrollView,
        Image,
        Animated,
        TouchableHighlight,
        Keyboard,
        KeyboardAvoidingView,
        Platform,
        ActivityIndicator,
        AsyncStorage,
        Alert,
      } from 'react-native';
/*
      Native base components
*/
import { 
    Container, Row, Badge, Card, Grid, Col, List, ListItem, CardItem, Label, Root, ActionSheet, Header, 
    Title, Input, Item, Spinner, Subtitle, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text 
} from 'native-base';
import { connect } from 'react-redux';
import {VerifyToken} from '../actions/VerifyToken';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal'

class EmailToken extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              email : '',
              emailError : false,
              isFetching : false,
              digit1: '',
              digit2: '',
              digit3: '',
              digit4: '',
              digit5: '',
              digit6: ''
          };
      }
  
      componentWillMount() {
              this.setState({
                  fontLoaded  :  true,
                  token : '',
              });
        }

       async componentWillReceiveProps(nextProps) {
            const {isFetching, data, hasError, errorMessage} = this.props.token;
            if(isFetching === null && nextProps.token.isFetching === true) {
                this.setState({
                    isFetching : true
                })
            }
            else if(isFetching === true && nextProps.token.isFetching === false) {
              if(nextProps.token.hasError === false) {
                  var jsondata = JSON.parse(nextProps.token.data);
                  try {
                   await AsyncStorage.setItem('access_token',jsondata.token);
                  }
                  catch(error) {
                      throw error;
                  }
                  this.setState({
                    isFetching : false
                  })
                  Alert.alert(
                    'Verification complete',
                    'Click OK to proceed.',
                    [
                      {text: 'OK', onPress: () => Actions.reset('Registration')},
                    ],
                    { cancelable: false }
                  )
              } 
              else {
                  this.setState({
                      isFetching : false
                  })
                console.log(nextProps.token.errorMessage);
                Alert.alert(
                    'Invalid token',
                    nextProps.token.errorMessage,
                    [
                      {text: 'Try Again', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: true }
                  )
              }
            }
          }

        showToast(message,type,time) {
            Toast.show({
                text: message,
                position: 'bottom',
                buttonText: 'Okay',
                duration : time,
                type:type
              });
        }

        onPress() {
            if(this.state.digit1 == '' || this.state.digit2 == '' || this.state.digit3 == '' || this.state.digit4 == '' 
                || this.state.digit5 == '' || this.state.digit6 == '') {
                    if(this.state.digit1 == '') {
                        this.setState({
                            digit1error : true
                        })
                    }
                    else {
                        this.setState({
                            digit1error : false
                        })
                    }
                    if(this.state.digit2 == '') {
                        this.setState({
                            digit2error : true
                        })
                    }
                    else {
                        this.setState({
                            digit2error : false
                        })
                    }
                    if(this.state.digit3 == '') {
                        this.setState({
                            digit3error : true
                        })
                    }
                    else {
                        this.setState({
                            digit3error : false
                        })
                    }
                    if(this.state.digit4 == '') {
                        this.setState({
                            digit4error : true
                        })
                    }
                    else {
                        this.setState({
                            digit4error : false
                        })
                    }
                    if(this.state.digit5 == '') {
                        this.setState({
                            digit5error : true
                        })
                    }
                    else {
                        this.setState({
                            digit5error : false
                        })
                    }
                    if(this.state.digit6 == '') {
                        this.setState({
                            digit6error : true
                        })
                    }
                    else {
                        this.setState({
                            digit6error : false
                        })
                    }
                }
                else {
                    this.setState({
                        isFetching : true
                    })
                    this.props.VerifyToken('' + this.state.digit1+this.state.digit2+this.state.digit3+this.state.digit4+this.state.digit5+this.state.digit6)
                }
        }
        closeModal() {
            this.setState({isFetching:false});
          }

        render() {
            return (
                    <Container>
                        <Header style={{backgroundColor : 'transparent'}} noShadow>
                            <Left>
                                <Button transparent onPress={() => Actions.pop()}>
                                    <Icon name='ios-arrow-back-outline' style={{color: '#000',fontSize:50}}/>
                                </Button>
                            </Left>
                            <Body />
                            <Right />
                        </Header>
                        <Content contentContainerStyle={{alignItems:'center',justifyContent:'center',flex:1,marginTop:20}}>
                            <Text style={{textAlign:'center',fontSize:25,marginBottom:30,fontFamily:'Raleway-Medium'}}>
                                Enter 6 digit token received on E-Mail
                            </Text>
                            <Grid>
                                <Col>
                                    <Item regular error={true} style={this.state.tokenError || this.state.digit1error ? {borderColor:'#f84646'} : {borderColor : '#4c9ef3'}}>
                                        <Input
                                            onChangeText={(digit1) => this.setState({digit1: digit1})}
                                            onChange={() =>this.digit2._root.focus()}
                                            style={{fontSize:17,color: '#000',marginTop:15,textAlign:'center',fontFamily:'Roboto-Light'}}
                                            keyboardType='numeric'
                                            autoFocus
                                            maxLength={1}
                                            returnKeyType={'next'}
                                        />
                                    </Item>
                                </Col>
                                <Col>
                                    <Item regular error={true} style={this.state.tokenError || this.state.digit2error ? {borderColor:'#f84646'} : {borderColor : '#4c9ef3'}}>
                                        <Input
                                            onChangeText = {(digit2) => this.setState({digit2 : digit2})}
                                            onChange={() =>this.digit3._root.focus()}
                                            style={{fontSize:17,color: '#000',marginTop:15,textAlign:'center',fontFamily:'Roboto-Light'}}
                                            keyboardType='numeric'
                                            maxLength={1}
                                            returnKeyType='next'
                                            ref={(digit2) => {this.digit2 = digit2}}
                                        />
                                    </Item>
                                </Col>
                                <Col>
                                    <Item regular error={true} style={this.state.tokenError || this.state.digit3error ? {borderColor:'#f84646'} : {borderColor : '#4c9ef3'}}>
                                        <Input
                                            onChangeText = {(digit3) => this.setState({digit3 : digit3})}
                                            onChange={() =>this.digit4._root.focus()}
                                            style={{fontSize:17,color: '#000',marginTop:15,textAlign:'center',fontFamily:'Roboto-Light'}}
                                            keyboardType='numeric'
                                            maxLength={1}
                                            returnKeyType='next'
                                            ref={(digit3) => {this.digit3 = digit3}}
                                        />
                                    </Item>
                                </Col>
                                <Col>
                                    <Item regular error={true} style={this.state.tokenError || this.state.digit4error ? {borderColor:'#f84646'} : {borderColor : '#4c9ef3'}}>
                                        <Input
                                            onChangeText = {(digit4) => this.setState({digit4 : digit4})}
                                            onChange={() =>this.digit5._root.focus()}
                                            style={{fontSize:17,color: '#000',marginTop:15,textAlign:'center',fontFamily:'Roboto-Light'}}
                                            keyboardType='numeric'
                                            maxLength={1}
                                            returnKeyType='next'
                                            ref={(digit4) => {this.digit4 = digit4}}
                                        />
                                    </Item>
                                </Col>
                                <Col>
                                    <Item regular error={true} style={this.state.tokenError || this.state.digit5error ? {borderColor:'#f84646'} : {borderColor : '#4c9ef3'}}>
                                        <Input
                                            onChangeText = {(digit5) => this.setState({digit5 : digit5})}
                                            onChange={() =>this.digit6._root.focus()}
                                            style={{fontSize:17,color: '#000',marginTop:15,textAlign:'center',fontFamily:'Roboto-Light'}}
                                            keyboardType='numeric'
                                            maxLength={1}
                                            returnKeyType='next'
                                            ref={(digit5) => {this.digit5 = digit5}}
                                        />
                                    </Item>
                                </Col>
                                <Col>
                                    <Item regular error={true} style={this.state.tokenError || this.state.digit6error ? {borderColor:'#f84646'} : {borderColor : '#4c9ef3'}}>
                                        <Input
                                            onChangeText = {(digit6) => this.setState({digit6 : digit6})}
                                            style={{fontSize:17,color: '#000',marginTop:15,textAlign:'center',fontFamily:'Roboto-Light'}}
                                            keyboardType='numeric'
                                            maxLength={1}
                                            returnKeyType='next'
                                            ref={(digit6) => {this.digit6 = digit6}}
                                        />
                                    </Item>
                                </Col>
                            </Grid>
                        </Content>
                        <Modal 
                        isVisible={this.state.isFetching}
                        style={{alignItems:'center',justifyContent:'center',flex: 1}}
                        >
                                <Spinner color='red' />
                        </Modal>
                        <Button 
                            full
                            primary
                            onPress={this.onPress.bind(this)}>
                                <Text style={{textAlign:'center',textAlignVertical:'center'}}>Submit</Text>
                        </Button>
                    </Container>
            );
        }
    }

    function mapStateToProps(state) {
        return {
          token : state.User
        }
    }
      
export default connect(mapStateToProps,{VerifyToken})(EmailToken);