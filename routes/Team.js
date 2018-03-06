import React from 'react';
import { Container, Row ,Badge ,Card, Grid, Col, List, ListItem, CardItem, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Styles from '../styles/RetailerStyle';
import { Alert, View,Keyboard, LayoutAnimation , Animated, TextInput, KeyboardAvoidingView, AsyncStorage, ScrollView, Switch } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Pusher from 'pusher-js/react-native'
import { MESSAGE, CODE, GRAPH, POLL } from '../utils/ActionTypes'
import {sendMessage} from '../actions/Chat';
import { connect } from 'react-redux';
import Modal from 'react-native-modal'

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
              displayFooter : 'flex',
              pollitemnumber: 2,
              pollitem : [],
              PollModal : false,
              GraphModal : false,
              CodeModal : false,
              showDisabledButton : true,
              PollItemText : []
          };
          this.socket = new Pusher('c8aa2bd0e73e7df4c612', {
            appId: '472232',
            secret: '733050c3d6108065c34b',
            cluster: 'ap2',
            encrypted: true,
            restServer: 'http://192.168.42.96:4000/send/anmolwassan',
            activityTimeout: 15000
          });
          this.channel = this.socket.subscribe('chat-channel');
          this.channel.bind('send',(data) => {
          });
      }
  
      componentWillMount() {
              this.setState({
                  fontLoaded  :  true,
                  message : null
              });
          this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
          this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
        }

        /*
        * Important: The function will get called when the user sends the message. 
        * Props: message, type, sender
        * type: MESSAGE, CODE, POLL, GRAPH
        * message : The message sent and received
        * The `chats` array is updated each time when the message is sent or received.
        */
        async componentWillReceiveProps(nextProps) {
            const {type,message} = nextProps.user;
            if(type === MESSAGE) {
                await this.state.chats.push({
                    sender : "Anmol",
                    message : message
                });
            }
            if(type === POLL) {
                Alert.alert('New Poll Received');
            }
        }
        
          componentWillUnmount() {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
          }
        
          _keyboardDidShow = () => {
            this.setState({
                keyboardShow : true,
                displayFooter : 'none'
            });
          }
        
          _keyboardDidHide = () => {
            this.setState({
                keyboardShow : false,
                displayFooter : 'flex'
            });
          }

          _toggleModal(type) {
              switch(type) {
                case 'poll':
                    this.setState({
                        GraphModal : false,
                        PollModal : true
                    });
                    break;
                case 'code':
                    this.setState({
                        GraphModal : false,
                        PollModal : false
                    });
                    Actions.Code();
                    break;
                case 'graph':
                    this.setState({
                        CodeModal : false,
                        GraphModal : true,
                        PollModal : false
                    });
                    break;
              }
          }

        onSearchBarClosePress() {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
            this.setState({searchBar : 'none',header: 'flex'});
        }

        onSearchBarOpenPress() {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
            this.setState({searchBar : 'flex',header: 'none'});
        }

        renderPollItem() {
            this.state.pollitem.push(
                <Item key={this.state.pollitemnumber} regular style={{marginBottom:10,borderColor:'#000',width:'80%',alignItems:'center',justifyContent:'center'}}>
                    <Input 
                        placeholderTextColor='#000' 
                        style={{fontSize:17,color: '#000'}}
                        onChangeText = {(text) => this.setState({[`pollitemnumber${this.state.pollitemnumber}`] : text})}
                        placeholder={'Option ' + this.state.pollitemnumber}
                    />
                </Item>
            );
        }

        async addNewPollItem() {
            var pollno = this.state.pollitemnumber;
            pollno+=1;
            await this.setState({
                pollitemnumber : pollno,
            });
            this.renderPollItem();
            this.setState({showDisabledButton: false});
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

        sendMessageAction(message,type,sender) {
            this.props.sendMessage(message,type,sender);
            this.setState({
                message : ''
            });
        }

        createPoll() {
            for(var i=1; i<=this.state.pollitemnumber; i++) {
                this.state.PollItemText.push(this.state['pollitemnumber'+i]);
            }
            this.props.sendMessage(this.state.PollItemText,POLL,'ANMOL');
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
                        Actions.Hotel();
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

        closeModal() {
            this.setState({
                PollModal: false,
                CodeModal : false,
                GraphModal: false
            })
        }

        removeOption() {
            var pollno = this.state.pollitemnumber;
            pollno -= 1;
            if(pollno > 2) {
                this.setState({
                    pollitemnumber : pollno
                });
                this.state.pollitem.pop();
            }
            else if(pollno == 2) {
                this.setState({
                    pollitemnumber : pollno,
                    showDisabledButton : true
                });
                this.state.pollitem.pop();
            }
        }

        render() {            
            return (
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
                            <Icon name='ios-menu-outline' style={{color: '#fff',fontSize:30}}/>
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
                            <List 
                                dataArray={this.state.chats}
                                renderRow={
                                    (row) =>
                                        this.displayOwnMessageCard(row.message)
                                }>
                            </List>
                        <Modal 
                            style={{backgroundColor:'#d3e4ff'}} 
                            isVisible={this.state.PollModal} 
                            >
                            <Icon active 
                                name='ios-close-outline' 
                                alignItems='flex-end' 
                                style={{fontSize:50,marginLeft:15,marginTop:15}}/>
                            <ScrollView keyboardShouldPersistTaps='always' style={{flex: 1,paddingTop:30}}>
                                <View style={{alignItems: 'center',justifyContent:'center',flex: 1}}>
                                <Item style={{borderBottomColor:'#000',marginTop:15,width:'80%',alignItems:'center',alignSelf:'center'}}>
                                    <Icon active name='md-create' />
                                        <Input 
                                            placeholderTextColor='#000' 
                                            style={{fontSize:20,color: '#000'}}
                                            multiline 
                                            textAlign='center'
                                            placeholder='Poll Title'/> 
                                </Item>
                                <Item style={{borderBottomColor:'#000',marginTop:15,width:'80%',alignItems:'center',alignSelf:'center'}}>
                                    <Icon active name='md-create' />
                                        <Input 
                                            placeholderTextColor='#000' 
                                            style={{fontSize:20,color: '#000'}}
                                            multiline 
                                            textAlign='center'
                                            placeholder='Additional Info'/> 
                                </Item>
                                <Text>Vote more than once?</Text>
                                <Switch onTintColor='#34e33a'/>
                                <Item regular style={{marginBottom:10,marginTop:15,borderColor:'#000',width:'80%',alignItems:'center',justifyContent:'center'}}>
                                    <Input 
                                    placeholderTextColor='#000' 
                                    style={{fontSize:17,color: '#000'}}
                                    onChangeText = {(text) => this.setState({pollitemnumber1 : text})}
                                    placeholder='Option 1' />
                                </Item>
                                <Item regular style={{marginBottom:10,borderColor:'#000',width:'80%',alignItems:'center',justifyContent:'center'}}>
                                    <Input 
                                    placeholderTextColor='#000' 
                                    style={{fontSize:17,color: '#000'}}
                                    onChangeText = {(text) => this.setState({pollitemnumber2 : text})}
                                    placeholder='Option 2' />
                                </Item>
                                {this.state.pollitem}
                                <Grid>
                                    <Col>
                                        <Button 
                                            style={{height: 40, width:150,alignSelf:'center',marginBottom:20}}
                                            onPress={this.addNewPollItem.bind(this)}
                                            rounded dark>
                                            <Icon name='ios-add-outline' />
                                            <Text style={{textAlign:'center',marginRight:30}}>Add new</Text>
                                        </Button>
                                    </Col>
                                    
                                    <Col>
                                        <Button
                                            disabled={this.state.showDisabledButton}
                                            style={{height: 40, width:150,alignSelf:'center',marginBottom:20}}
                                            rounded danger={!this.state.showDisabledButton}
                                            onPress={this.removeOption.bind(this)}>
                                            <Icon name='ios-close-outline' />
                                            <Text style={{textAlign:'center',marginRight:30}}>Remove</Text>
                                        </Button>
                                    </Col>
                                </Grid>
                                </View>
                            </ScrollView>
                            <Button 
                                success
                                onPress={this.createPoll.bind(this)} 
                                style={{alignSelf: 'center',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                <Text style={{textAlign:'center'}}>CREATE POLL</Text>
                            </Button>
                        </Modal>
                    </Content>
                    <Footer style={{marginBottom: this.state.keyboardHeight}}>
                        <FooterTab style={{backgroundColor:'#fff'}}>
                            <Input 
                                placeholder="Start typing.." 
                                multiline 
                                autoGCol
                                placeholderTextColor='#000' 
                                onChangeText = {(message) => this.setState({message : message})}
                                value = {this.state.message}
                                style={{fontFamily: 'Roboto',marginLeft:5}}/>
                            <Item onPress={this.sendMessageAction.bind(this,this.state.message,MESSAGE,'ANMOL')}>
                                <Icon active name='md-paper-plane' style={{alignSelf:'center',color:'#56a2ce',fontSize:30,marginRight: 20}}/>
                            </Item>
                            {
                                !this.state.keyboardShow ? 
                                <Icon active name='ios-attach' style={{alignSelf:'center',color:'#56a2ce',fontSize:30,marginRight: 20}}/> : null
                            }
                        </FooterTab>
                    </Footer>
                    <Footer style={{display: this.state.displayFooter}}>
                        <FooterTab>
                            <Button vertical onPress={this._toggleModal.bind(this,'poll')}>
                            <Icon name="ios-list-box-outline" />
                                <Text>Create poll</Text>
                            </Button>
                            <Button vertical onPress={this._toggleModal.bind(this,'code')}>
                                <Icon name="ios-code-outline" />
                                <Text>Create code</Text>
                            </Button>
                            <Button vertical onPress={this._toggleModal.bind(this,'graph')}>
                                <Icon name="ios-stats-outline" />
                                <Text>Create graph</Text>
                            </Button>
                        </FooterTab>
                    </Footer>   
                    </Container>
            );
        }
    }

    function mapStateToProps(state) {
        return {
          user : state.ChatReducer
        }
    }

    export default connect(mapStateToProps,{sendMessage})(Team);