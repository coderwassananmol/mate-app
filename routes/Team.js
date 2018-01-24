import React from 'react';
import { Container, Card, CardItem, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Font } from 'expo';
import AppLoading from 'expo/src/launch/AppLoading';
import Styles from '../styles/RetailerStyle';
import { Constants } from 'expo';
import { Alert, View,Keyboard, LayoutAnimation , Animated, TextInput, KeyboardAvoidingView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Team extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              fontLoaded : false,
              searchBar : 'none',
              header : 'flex',
              keyboardHeight : 0
          };
      }
  
      componentWillMount() {
          (async() => {
              await Font.loadAsync({
                  'raleway-light' :  require('../assets/fonts/Raleway-Light.ttf'),
                  'raleway-medium':  require('../assets/fonts/Raleway-Medium.ttf'),
                  'opensans-bold' :  require('../assets/fonts/OpenSans-Bold.ttf'),
                  'Roboto'        :  require('native-base/Fonts/Roboto.ttf'),
                  'Roboto_medium' :  require('native-base/Fonts/Roboto_medium.ttf'),
              });
              this.setState({
                  fontLoaded  :  true,
              });
          })();
          this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
          this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
        }
        
          componentWillUnmount() {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
          }
        
          _keyboardDidShow = (e) => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
            const {height} = e.endCoordinates;
            this.setState({keyboardHeight:height});
          }
        
          _keyboardDidHide = () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
            this.setState({keyboardHeight: 0});
          }

        onSearchBarClosePress() {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
            this.setState({searchBar : 'none',header: 'flex'});
        }

        onSearchBarOpenPress() {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
            this.setState({searchBar : 'flex',header: 'none'});
        }

        displayCard(contact,message) {
            return (
                <Card style={{marginLeft: 4,marginTop:5,minWidth: '30%',maxWidth:'50%'}}>
                    <CardItem>
                        <Body>
                            <Text style={{fontSize: 12,color:'#56a2ce',marginBottom:5}}>{contact}</Text>
                            <Text style={{fontFamily: 'Roboto'}}>{message}</Text>
                            <Text style={{fontSize: 12,alignSelf: 'flex-end',color:'#56a2ce'}}>{new Date().toLocaleTimeString()}</Text>
                        </Body>
                    </CardItem>
                </Card>
            );
        }

        displayOwnMessageCard(message) {
            return (
                <Card style={{marginRight: 4,marginTop:5,width:'50%',alignSelf : 'flex-end'}}>
                    <CardItem>
                        <Body>
                            <Text style={{fontSize: 12,color:'#56a2ce',marginBottom:5}}>You</Text>
                            <Text style={{fontFamily: 'Roboto',alignSelf:'baseline'}}>{message}</Text>
                            <Text style={{fontSize: 12,alignSelf: 'flex-end',color:'#56a2ce'}}>{new Date().toLocaleTimeString()}</Text>
                        </Body>
                    </CardItem>
                </Card>
            );
        }

        onRightMenuPress() {
            this.displayCard("Anmol Wassan","Hello world!");
            var DESTRUCTIVE_INDEX = 5;
            var CANCEL_INDEX = 5;
            var BUTTONS = [
                { text: "All media", icon: "american-football", iconColor: "#2c8ef4" },
                { text: "Notes", icon: "analytics", iconColor: "#f42ced" },
                { text: "To Do", icon: "aperture", iconColor: "#ea943b" },
                { text: "Team Reminder", icon: "trash", iconColor: "#fa213b" },
                { text: "Goal", icon: "close", iconColor: "#25de5b" },
                { text: "Cancel", icon: "close", iconColor: "#25de5b" }
              ];
            ActionSheet.show({
                options : BUTTONS,
                title: "Choose an option..",
                destructiveButtonIndex : DESTRUCTIVE_INDEX,
                cancelButtonIndex : CANCEL_INDEX
            },buttonIndex => {
                switch(buttonIndex) {
                    case 0:
                        Actions.AllMedia();
                        break;
                    case 1:
                        Actions.Notes();
                        break;
                    case 2:
                        Actions.ToDo();
                        break;
                    case 3:
                        Actions.TeamReminder();
                        break;
                    case 4:
                        Actions.Goal();
                        break;
                    default:
                }
            });
        }

        render() {
            if(!this.state.fontLoaded) {
                return <AppLoading />;
            }
            return (
                <Root>
                    <Container style={{marginTop : Constants.statusBarHeight}}>
                    <Header searchBar rounded backgroundColor='#2c70dd' iosBarStyle='dark-content' androidStatusBarColor='#56a2ce'>
                    <Item style={{display: this.state.searchBar}}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-close" onPress={this.onSearchBarClosePress.bind(this)}/>
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                    <Left style={{display: this.state.header}}>
                        <Button transparent>
                            <Icon name='ios-menu' style={{color: '#fff',fontSize:30}}/>
                        </Button>
                    </Left>
                    <Body style={{display: this.state.header}}>
                        <Title>Beard Team</Title>
                        <Subtitle>20 members</Subtitle>
                    </Body>
                    <Right style={{display: this.state.header}}>
                        <Icon name="ios-search" style={{color: '#fff',fontSize:30,marginRight: 10}} onPress={this.onSearchBarOpenPress.bind(this)}/>
                        <Icon name="ios-more" style={{color: '#fff',fontSize:30,marginLeft: 10}} onPress={this.onRightMenuPress.bind(this)}/> 
                    </Right>
                    </Header>
                    <Content>
                        {this.displayOwnMessageCard("Hello there!")}
                        {this.displayCard("John Doe","Hey!")}
                    </Content>
                    <Footer style={{marginBottom: this.state.keyboardHeight}}>
                        <FooterTab style={{backgroundColor:'#fff'}}>
                            <Input placeholder="Send message.." multiline placeholderTextColor='#000' style={{fontFamily: 'Roboto',marginLeft:5}}/>
                            <Icon active name='md-paper-plane' style={{alignSelf:'center',color:'#56a2ce',fontSize:30,marginRight: 20}}/>
                        </FooterTab>
                    </Footer>   
                    </Container>
                </Root>
            );
        }
    }