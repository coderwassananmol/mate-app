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
        ActivityIndicator
      } from 'react-native';
/*
      Native base components
*/
import { 
    Container, Row, Badge, Card, Grid, Col, List, ListItem, CardItem, Label, Root, ActionSheet, Header, 
    Title, Input, Item, Spinner, Subtitle, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text 
} from 'native-base';
import { connect } from 'react-redux';
import {EmailVerify} from '../actions/EmailVerify';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal';

class EmailRegistration extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              email : '',
              emailError : false,
              isFetching : false
          };
      }
  
      componentWillMount() {
              this.setState({
                  fontLoaded  :  true,
                  email : '',
                  emailValid : true,
                  emailValidColor : '#55d841'
              });
        }

        async componentWillReceiveProps(nextProps) {
            const {isFetching, data, hasError, errorMessage} = this.props.emailsent;
            if(isFetching === null && nextProps.emailsent.isFetching === true) {
              this.setState({
                isFetching : true
              });
            }
            else if(isFetching === true && nextProps.emailsent.isFetching === false) {
              this.setState({
                isFetching : false
              });
              if(nextProps.emailsent.hasError === false) {
                  Actions.EmailToken();
              }
              else {
                this.showToast(nextProps.emailsent.errorMessage.message,'danger',4000);
              }
            }
          }

        checkIfEmail(email) {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const checkmail = /@(gmail|yahoo|rediff|outlook|facebook|google|mail|yandex|hotmail)/;
            if(!pattern.test(email)) {
                return false;
            }
            else {
                if(!checkmail.test(email)) {
                    return true;
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
            if(this.state.email == '') {
                console.log("Empty email");
                this.setState({
                    emailError : true
                });
                this.showToast("E-mail field is empty",'warning',2000);
            }
            else {
                if(!this.checkIfEmail(this.state.email)) {
                    this.setState({
                        emailError : true
                    });
                    this.showToast("Invalid E-Mail. Must have a valid company domain.",'warning',4000);
                }
                else {
                    this.setState({
                        emailError : false
                    });
                    this.props.EmailVerify(this.state.email);
                }
            }
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
                        <Content contentContainerStyle={{alignItems:'center',justifyContent:'center',flex:1}}>
                            <Text style={{textAlign:'center',fontSize:25,marginBottom:30,fontFamily:'Raleway-Medium'}}>
                                Enter E-Mail Address to continue
                            </Text>
                            <Item floatingLabel error={true} style={this.state.emailError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
                                {this.state.emailError ? <Icon name='close-circle'/> : null}
                                <Label style={{textAlign:'center',fontFamily:'Roboto-Light'}}>E-Mail Address</Label>
                                <Input
                                    onChangeText = {(email) => this.setState({email : email})}
                                    style={{fontSize:17,color: '#000',marginTop:15,textAlign:'center',fontFamily:'Roboto-Light'}}
                                    keyboardType='email-address'
                                    autoFocus
                                />
                            </Item>
                            <Text style={{textAlign:'center',fontSize:16,marginBottom:25,marginTop:20,fontFamily:'Bellefair-Regular',color: '#6b6b6b'}}>
                                * The E-Mail address must end with the company domain. It will be used to verify your identity.
                            </Text>
                        </Content>
                        <Modal 
                            style={{alignItems:'center',justifyContent:'center'}} 
                            isVisible={this.state.isFetching}>
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
          emailsent : state.User
        }
    }
      
export default connect(mapStateToProps,{EmailVerify})(EmailRegistration);