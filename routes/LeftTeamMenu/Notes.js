import React from 'react';
import { Container, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Font } from 'expo';
import AppLoading from 'expo/src/launch/AppLoading';
import Styles from '../../styles/RetailerStyle';
import { Constants } from 'expo';
import { Alert, View, TouchableOpacity, TextInput, TouchableHighlight, AsyncStorage } from 'react-native';
import Modal from "react-native-modal";

export default class Notes extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              fontLoaded : false,
              isModalVisible: false,
              isSecondModalVisible : false,
              noteTitle : '',
              noteText : '',
          };
      }
  
      componentWillMount() {
          (async() => {
              await Font.loadAsync({
                  'raleway-light' :  require('../../assets/fonts/Raleway-Light.ttf'),
                  'raleway-medium':  require('../../assets/fonts/Raleway-Medium.ttf'),
                  'opensans-bold' :  require('../../assets/fonts/OpenSans-Bold.ttf'),
                  'Roboto'        :  require('native-base/Fonts/Roboto.ttf'),
                  'Roboto_medium' :  require('native-base/Fonts/Roboto_medium.ttf'),
              });
              this.setState({
                  fontLoaded  :  true,
              });
          })();
        }

        _toggleModal = () =>
            this.setState({ isModalVisible: !this.state.isModalVisible });

        _toggleSecondModal = () =>
            this.setState({ isSecondModalVisible: !this.state.isSecondModalVisible });

        onNoteTitlePress() {
            this._toggleModal();
            this._toggleSecondModal();
        }
    
        onSubmit() {
            for(var i=1; i<=this.state.todoItemNumber; i++) {
                if(this.state[`todolistitem${i}`] != undefined) {
                    console.log(this.state[`todolistitem${i}`]);
                }
            }
            this._toggleSecondModal();
        }

        render() {
            if(!this.state.fontLoaded) {
                return <AppLoading />;
            }
            return (
                <Container style={{marginTop : Constants.statusBarHeight}}>
                    <Header searchBar rounded backgroundColor='#2c70dd' iosBarStyle='dark-content' androidStatusBarColor='#56a2ce'>
                        <Left>
                            <Button transparent>
                                <Icon name='ios-arrow-back-outline' style={{color: '#fff',fontSize:30}}/>
                            </Button>
                        </Left>
                        <Body style={{display: this.state.header}}>
                            <Title style={{textAlign:'center'}}>View/Create Note</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={this._toggleModal.bind(this)}>
                                <Icon name='ios-add' style={{color: '#fff',fontSize:30}}/>
                            </Button>
                        </Right>
                    </Header>
                    <Content style={{backgroundColor:'#fff'}}>
                        <Text style={{color: '#999999',textAlign:'center',fontSize:20}}>Sorry, no notes found.</Text>
                    </Content>
                    <Modal isVisible={this.state.isModalVisible} onBackButtonPress={() => this.setState({isModalVisible:false})} avoidKeyboard style={{alignItems:'center',justifyContent:'center'}}>
                        <View style={{ flex: 1,alignItems:'center',justifyContent:'center' }}>
                            <Text style={{fontSize:20,color: '#fff',fontFamily:'raleway-light',textAlign:'center'}}>Enter Note Title:</Text>
                            <Item rounded style={{marginTop:15}}>
                            <Input value={this.state.noteTitle} style={{height: 40,textAlignVertical:'center',color:'#fff',fontSize:20,fontFamily:'Roboto' ,width: 200 ,textAlign:'center'}} onChangeText={(noteTitle) => this.setState({noteTitle: noteTitle})}/>
                            </Item>
                            <Button onPress={this.onNoteTitlePress.bind(this)} style={{marginTop: 15,alignSelf:'center'}} rounded success>
                                <Text>Proceed</Text>
                            </Button>
                        </View>
                    </Modal>
                    <Modal animationIn='slideInRight' isVisible={this.state.isSecondModalVisible} onBackButtonPress={this.onNoteTitlePress.bind(this)} avoidKeyboard style={{alignItems:'center',justifyContent:'center'}}>
                        <View style={{ flex: 1,alignItems:'center',justifyContent:'center' }}>
                            <View style={{flexDirection:'row'}}>
                                    <Text 
                                        style={{fontSize:20,color: '#fff',fontFamily:'raleway-light',textAlign:'center'}}>
                                        Create note
                                    </Text>
                                    <Icon active name='ios-paper-outline' style={{color:'#57fe88',marginLeft:10}}/>
                            </View>
                            <Item regular>
                        <Input autoGrow textBreakStrategy='balanced' multiline value={this.state.noteText} style={{height: 40,textAlignVertical:'center',color:'#fff',fontSize:20,fontFamily:'Roboto' ,width: 200 ,textAlign:'center'}} onChangeText={(noteText) => this.setState({noteText: noteText})}/>
                        </Item>
                            <Button 
                                onPress={this.onSubmit.bind(this)} 
                                style={{marginTop: 15,alignSelf:'center'}} 
                                rounded success>
                                <Text>Submit</Text>
                            </Button>
                        </View>
                    </Modal>
                </Container>
            );
        }
    }