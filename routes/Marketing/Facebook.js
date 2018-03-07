import React from 'react';
import { Container, Row ,Badge ,Card, Grid, Thumbnail, Col, List, ListItem, CardItem, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Alert, Image, View,Keyboard, LayoutAnimation , Animated, TextInput, KeyboardAvoidingView, AsyncStorage, ScrollView, Switch } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Pusher from 'pusher-js/react-native'
import { connect } from 'react-redux';
import Modal from 'react-native-modal'
import { LoginManager, AccessToken } from 'react-native-fbsdk';


export default class Facebook extends React.Component {

    render() {
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
                            <Row style={{alignItems:'center',justifyContent:'center'}}>
                                <Thumbnail
                                    style={{alignSelf:'center'}} 
                                    large
                                    source={{uri: 'https://scontent.xx.fbcdn.net/v/t31.0-1/c94.214.381.381/s200x200/20861638_1622996097752192_3862410301126752750_o.jpg?oh=3f017f29ab903907ba8d6d972a0b0ece&oe=5B3BDC44'}} 
                                />
                            </Row>
                            <Row style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:20,fontFamily:'Raleway-Light',margin:20,color:'#000',textAlign:'center'}}>
                                    Anmol Wassan
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{fontSize:20,fontFamily:'OpenSans-Regular',margin:20,color:'#000'}}>
                                    Pages you manage
                                </Text>
                            </Row>
                            <Row>
                                <Col>
                                    <Card>
                                        <CardItem>
                                            <Image
                                                style={{width : '100%', height : null}}
                                                source={{uri : 'https://scontent.xx.fbcdn.net/v/t1.0-1/c132.28.353.353/s200x200/1010511_632617490083291_1708679486_n.jpg?oh=f204c3a2d2e4b121ee59ffce156d118d&oe=5AFFB761'}}
                                            />
                                        </CardItem>
                                        <CardItem>
                                            <Text style={{color:'#000',fontFamily:'MyriadPro-Regular',textAlign:'center'}}>
                                                My World - Eminem
                                            </Text>
                                        </CardItem>
                                    </Card>
                                </Col>
                            </Row>
                    </Content>
                </Container>
            </Root>
        );
    }
} 