import React from 'react';
import { Container, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Font } from 'expo';
import AppLoading from 'expo/src/launch/AppLoading';
import Styles from '../styles/RetailerStyle';
import { Constants } from 'expo';
import { Alert } from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class Team extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              fontLoaded : false,
              searchBar : 'none',
              header : 'flex'
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
        }

        onSearchBarClosePress() {
            this.setState({searchBar : 'none',header: 'flex'});
        }

        onSearchBarOpenPress() {
            this.setState({searchBar : 'flex',header: 'none'});
        }

        onRightMenuPress() {
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
                    <Text>
                        This is Content Section
                    </Text>
                    </Content>
                    <Footer>
                    <FooterTab>
                        <Button full>
                        <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                    </Footer>
                    </Container>
                </Root>
            );
        }
    }