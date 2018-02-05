import React from 'react';
import { Container, Root, ActionSheet , Toast ,Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Styles from '../../styles/RetailerStyle';
import { Alert,DatePickerAndroid,TimePickerAndroid, TouchableHighlight, View } from 'react-native';
import Modal from "react-native-modal";

var PushNotification = require('react-native-push-notification');

export default class TeamReminder extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              fontLoaded : false,
              searchBar : 'none',
              header : 'flex',
              showToast: false
          };
      }
  
      componentWillMount() {
              this.setState({
                  fontLoaded  :  true,
              });
        }

        async openTimePicker() {
            try {
                var date = new Date(Date.now());
                const {action, hour, minute} = await TimePickerAndroid.open({
                  hour: date.getHours(),
                  minute: date.getMinutes(),
                  is24Hour: false, // Will display '2 PM'
                });

                if (action !== TimePickerAndroid.dismissedAction) {
                    this.setState({
                        time : hour+":"+minute
                    })
                }
              } catch ({code, message}) {
                console.warn('Cannot open time picker', message);
              }
        }
        
        async openDatePicker() {
            try {
                const {action, year, month, day} = await DatePickerAndroid.open({
                  // Use `new Date()` for current date.
                  // May 25 2020. Month 0 is January.
                  date: new Date(Date.now()),
                  minDate: new Date(Date.now()),
                  mode: 'spinner'
                });
                if (action !== DatePickerAndroid.dismissedAction) {
                  this.setState({date: month+1+"/"+day+"/"+year});
                }
              } catch ({code, message}) {
                console.warn('Cannot open date picker', message);
              }
        }

        setReminder() {
              this._toggleModal();
              var message = this.state.date + " " + this.state.time;
              Alert.alert(message);
              /*Toast.show({
                text: message,
                position: 'bottom',
                buttonText: 'Okay',
                showToast: true
              });*/
              PushNotification.localNotificationSchedule({
                message: "My Notification Message", // (required)
                date: new Date(message) // in 60 secs
              });
        }

        _toggleModal = () =>
            this.setState({ isModalVisible: !this.state.isModalVisible });

        render() {
            PushNotification.configure({
 
                // (optional) Called when Token is generated (iOS and Android)
                onRegister: function(token) {
                    console.log( 'TOKEN:', token );
                },
             
                // (required) Called when a remote or local notification is opened or received
                onNotification: function(notification) {
                    console.log( 'NOTIFICATION:', notification );
             
                    // process the notification
                    
                    // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
                    notification.finish(PushNotificationIOS.FetchResult.NoData);
                },
             
                // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
                senderID: "YOUR GCM SENDER ID",
             
                // IOS ONLY (optional): default: all - Permissions to register.
                permissions: {
                    alert: true,
                    badge: true,
                    sound: true
                },
             
                // Should the initial notification be popped automatically
                // default: true
                popInitialNotification: true,
             
                /**
                  * (optional) default: true
                  * - Specified if permissions (ios) and token (android and ios) will requested or not,
                  * - if not, you must call PushNotificationsHandler.requestPermissions() later
                  */
                requestPermissions: true,
            });
              return (
                <Container>
                <Header searchBar rounded backgroundColor='#2c70dd' iosBarStyle='dark-content' androidStatusBarColor='#56a2ce'>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-arrow-back-outline' style={{color: '#fff',fontSize:30}}/>
                        </Button>
                    </Left>
                    <Body style={{display: this.state.header}}>
                        <Title style={{textAlign:'center'}}>View/Create Reminder</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this._toggleModal.bind(this)}>
                            <Icon name='ios-add' style={{color: '#fff',fontSize:30}}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{backgroundColor:'#fff'}}>
                    <Text style={{color: '#999999',textAlign:'center',fontSize:20}}>Sorry, no reminder found.</Text>
                </Content>
                <Modal isVisible={this.state.isModalVisible} onBackButtonPress={() => this.setState({isModalVisible:false})} avoidKeyboard>
                    <View style={{ flex: 1 }}>
                        <Text style={{fontSize:20,color: '#fff',fontFamily:'raleway-light',textAlign:'left'}}>Set Date</Text>
                        <Button onPress={this.openDatePicker.bind(this)} style={{marginTop: 15}} rounded success>
                            <Text>Set Date</Text>
                        </Button>
                        <Text style={{color: '#fff',margin:10}}>{this.state.date}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{fontSize:20,color: '#fff',fontFamily:'raleway-light',textAlign:'left'}}>Set Time</Text>
                        <Button onPress={this.openTimePicker.bind(this)} style={{marginTop: 15}} rounded success>
                            <Text>Set Time</Text>
                        </Button>
                    </View>
                    <Text style={{color: '#fff',margin:10}}>{this.state.time}</Text>
                    <View style={{ flex: 1 }}>
                        <Text style={{fontSize:20,color: '#fff',fontFamily:'raleway-light'}}>Set Reminder name:</Text>
                        <Item rounded style={{marginTop:15}}>
                            <Input value={this.state.remindername} style={{height: 40,textAlignVertical:'center',color:'#fff',fontSize:20,fontFamily:'Roboto' ,width: 200 ,textAlign:'center'}} onChangeText={(remindername) => this.setState({remindername: remindername})}/>
                        </Item>
                    </View>
                    <Button onPress={this.setReminder.bind(this)} style={{marginTop: 15, alignSelf:'center'}} success>
                        <Text>Set reminder</Text>
                    </Button>
                </Modal>
            </Container>
              )
        }
    }