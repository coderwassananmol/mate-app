import React from 'react';
import { Container, Row ,Badge ,Card, Grid, Col, List, Thumbnail, ListItem, CardItem, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Alert, View,Keyboard, LayoutAnimation , Animated, TextInput, KeyboardAvoidingView, AsyncStorage, ScrollView, Switch } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Pusher from 'pusher-js/react-native'
import { connect } from 'react-redux';
import Modal from 'react-native-modal'
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

export default class MarketingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin : false
        }
    }
    FBLogin() {
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
              if (result.isCancelled) {
                alert('Login cancelled');
              } else {
                  Actions.Facebook()
                console.log('Login success with permissions: ');
                console.log(result);
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        console.log(data.accessToken)
                    })
              }
            },
            function(error) {
              alert('Login fail with error: ' + error);
            }
          );
    }

    _responseInfoCallback(error, result) {
        if (error) {
          console.log('Error fetching data: ' + error.toString());
        } else {
          console.log('Success fetching data: ');
          console.log(result);
        }
      }
      makeRequest() {
        const infoRequest = new GraphRequest(
            '/me',
            null,
            this._responseInfoCallback,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
      }
    render() {
        this.makeRequest();
        return (
            <Root>
                <Container style={{backgroundColor:'#fff'}}>
                    <Header style={{backgroundColor : 'transparent'}} noShadow>
                            <Left>
                                <Button transparent onPress={() => Actions.pop()}>
                                    <Icon name='ios-arrow-back-outline' style={{color: '#000',fontSize:50}}/>
                                </Button>
                            </Left>
                            <Body />
                            <Right />
                        </Header>
                    <Content>
                        <Text style={{textAlign:'center',fontSize:30,marginBottom:30,fontFamily:'Raleway-Light'}}>
                            Choose a platform
                        </Text>
                        <Grid>
                            <Row style={{marginTop:20,marginBottom:20}}>
                                <Col>
                                    <Card>
                                        <CardItem button onPress={this.FBLogin.bind(this)} style={{alignItems : 'center', justifyContent : 'center'}}>
                                            <Icon name='logo-facebook' style={{color:'#3b5998',fontSize:30}}/>
                                            <Text style={{margin:10,fontFamily:'Roboto-Regular',fontSize:24,color:'#3b5998'}}>facebook</Text>
                                        </CardItem>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <CardItem style={{alignItems : 'center', justifyContent : 'center'}}>
                                            <Icon name='logo-twitter' style={{color:'#00aced',fontSize:30}}/>
                                            <Text style={{margin:10,fontFamily:'Roboto-Regular',fontSize:24,color:'#3b5998'}}>twitter</Text>
                                        </CardItem>
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{marginTop:20,marginBottom:20}}>
                                <Col>
                                    <Card>
                                        <CardItem style={{alignItems : 'center', justifyContent : 'center'}}>
                                            <Icon name='logo-instagram' style={{color:'#fb3958',fontSize:30}}/>
                                            <Text style={{margin:10,fontFamily:'Billabong',fontSize:24,color:'#125688'}}>Instagram</Text>
                                        </CardItem>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <CardItem style={{alignItems : 'center', justifyContent : 'center'}}>
                                            <Icon name='logo-linkedin' style={{color:'#0077B5',fontSize:30}}/>
                                            <Text style={{margin:10,fontFamily:'MyriadPro-Regular',fontSize:24,color:'#000'}}>LinkedIn</Text>
                                        </CardItem>
                                    </Card>
                                </Col>
                            </Row>
                        </Grid>
                    </Content>
                </Container>
            </Root>
        )
    }
}