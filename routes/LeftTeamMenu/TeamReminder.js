import React from 'react';
import { Container, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Styles from '../../styles/RetailerStyle';
import { Alert,TimePickerAndroid, TouchableHighlight } from 'react-native';
var PushNotification = require('react-native-push-notification');

export default class TeamReminder extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              fontLoaded : false,
              searchBar : 'none',
              header : 'flex'
          };
      }
  
      componentWillMount() {
              this.setState({
                  fontLoaded  :  true,
              });
        }

        async openTimePicker() {
            try {
                const {action, hour, minute} = await TimePickerAndroid.open({
                  hour: 14,
                  minute: 0,
                  is24Hour: false, // Will display '2 PM'
                });
                var date = new Date(Date.now());

                if (action !== TimePickerAndroid.dismissedAction) {
                    PushNotification.localNotificationSchedule({
                        message: "My Notification Message", // (required)
                        date: new Date('February 5, 2018 9:17') // in 60 secs
                      });
                }
              } catch ({code, message}) {
                console.warn('Cannot open time picker', message);
              }
        }

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
                    <Content>
                        <Button success onPress={this.openTimePicker.bind(this)}>
                            <Text>ANMOL</Text>
                        </Button> 
                    </Content>
                  </Container>
              )
        }
    }