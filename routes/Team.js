import React from 'react';
import { Container, Card, List, ListItem, CardItem, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Styles from '../styles/RetailerStyle';
import { Alert, View,Keyboard, LayoutAnimation , Animated, TextInput, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Pusher from 'pusher-js/react-native'
import { SEND_MESSAGE, RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../utils/ActionTypes'
import {sendMessage} from '../actions/Chat';
import { connect } from 'react-redux';

class Team extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              fontLoaded : false,
              searchBar : 'none',
              header : 'flex',
              keyboardShow : false,
              message : null,
              username : 'Anmol',
              chats : [],
              count : -2
          };
          this.socket = null;
          this.channel = null;
      }
  
      componentWillMount() {
              this.setState({
                  fontLoaded  :  true,
                  message : null
              });
          this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
          this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
          this.socket = new Pusher('c8aa2bd0e73e7df4c612', {
            cluster: 'ap2',
            activityTimeout : 15000
          });
          this.channel = this.socket.subscribe('chat-room');
        }

        /*
        * Important: The function will get called when the user sends the message. 
        * Props: type, message
        * type: SEND_MESSAGE or RECEIVE_MESSAGE
        * message : The message sent and received
        * The `chats` array is updated each time when the message is sent or received.
        */
        componentWillReceiveProps(nextProps) {
            const {type,message} = nextProps.user;
            if(type === SEND_MESSAGE) {
                this.state.chats.push({
                    sender : "Anmol",
                    message : message
                });
            }
        }

       shouldComponentUpdate(nextProps,nextState) {
           console.log("Next State: " + nextState.chats.length);
           console.log("Previous State: " + this.state.chats.length);
           return true;
        }
        
          componentWillUnmount() {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
          }
        
          _keyboardDidShow = () => {
            this.setState({keyboardShow : true});
          }
        
          _keyboardDidHide = () => {
            this.setState({keyboardShow : false});
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

        sendMessageAction() {
            const count = this.state.count;
            this.props.sendMessage(this.state.message,"Anmol");
            this.setState({
                count : count+1
            });
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
            console.log(this.state.chats);
            const {type,message} = this.props.user;
            
            return (
                <Root>
                    <Container>
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
                        <Item onPress={this.onRightMenuPress.bind(this)}>
                        <Icon name="ios-more" style={{color: '#fff',fontSize:30,marginLeft: 10}}/> 
                        </Item>
                    </Right>
                    </Header>
                    <Content>
                        {
                            <List dataArray={this.state.chats}
                                renderRow={(item) =>
                                    <Card style={{marginRight: 4,marginTop:5,width:'50%',alignSelf : 'flex-end'}}>
                                    <CardItem>
                                        <Body>
                                            <Text style={{fontSize: 12,color:'#56a2ce',marginBottom:5}}>You</Text>
                                            <Text style={{fontFamily: 'Roboto',alignSelf:'baseline'}}>{item.message}</Text>
                                            <Text style={{fontSize: 12,alignSelf: 'flex-end',color:'#56a2ce'}}>{new Date().toLocaleTimeString()}</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                                }
                                >
                                </List>
                        }
                    </Content>
                    <Footer style={{marginBottom: this.state.keyboardHeight}}>
                        <FooterTab style={{backgroundColor:'#fff'}}>
                            <Input 
                                placeholder="Start typing.." 
                                multiline 
                                autoGrow
                                placeholderTextColor='#000' 
                                onChangeText = {(message) => this.setState({message : message})}
                                value = {this.state.message}
                                style={{fontFamily: 'Roboto',marginLeft:5}}/>
                            <Item onPress={this.sendMessageAction.bind(this)}>
                                <Icon active name='md-paper-plane' style={{alignSelf:'center',color:'#56a2ce',fontSize:30,marginRight: 20}}/>
                            </Item>
                            {
                                !this.state.keyboardShow ? 
                                <Icon active name='ios-attach' style={{alignSelf:'center',color:'#56a2ce',fontSize:30,marginRight: 20}}/> : null
                            }
                        </FooterTab>
                    </Footer>   
                    </Container>
                </Root>
            );
        }
    }

    function mapStateToProps(state) {
        return {
          user : state.ChatReducer
        }
    }

    export default connect(mapStateToProps,{sendMessage})(Team);