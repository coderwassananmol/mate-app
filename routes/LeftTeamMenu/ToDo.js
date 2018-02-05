import React from 'react';
import { Container, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Styles from '../../styles/RetailerStyle';
import { Alert, View, TouchableOpacity, TextInput, TouchableHighlight, AsyncStorage } from 'react-native';
import Modal from "react-native-modal";

export default class Todo extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              fontLoaded : false,
              isModalVisible: false,
              isSecondModalVisible : false,
              todo : [],
              todoItemNumber : 1
          };
      }
  
      componentWillMount() {
              this.setState({
                  fontLoaded  :  true,
              });
        }

        _toggleModal = () =>
            this.setState({ isModalVisible: !this.state.isModalVisible });

        _toggleSecondModal = () =>
            this.setState({ isSecondModalVisible: !this.state.isSecondModalVisible });

        onTodoHeaderPress() {
            this._toggleModal();
            this._toggleSecondModal();
        }

         renderList() {
            var found = false;
            var todoItemNumber = this.state.todoItemNumber;
            this.state.todo.map(function(el,index) {
                console.log(todoItemNumber);
                if(el.key == todoItemNumber) {
                    found = true;
                }
            });
                if(!found) {
                    this.state.todo.push (
                        <Item key={this.state.todoItemNumber} regular style={{marginTop:15}}>
                            <Icon active name='ios-checkbox-outline' style={{color:'#90c5fc'}}/>
                                <Input
                                    value={this.state[this.state.todoItemNumber]}
                                    style={{height: 40,textAlignVertical:'center',color:'#fff',fontSize:20,fontFamily:'Roboto' ,width: 200 ,textAlign:'center'}}
                                    onChangeText={(todotext) => this.setState({[`todolistitem${this.state.todoItemNumber}`] : todotext})}
                                />
                        </Item>
                    );
                }
                return this.state.todo;
        }

        updateTodoItemNumber() {
            var itemno = this.state.todoItemNumber;
            itemno++;
            this.setState({todoItemNumber:itemno});
        }

        removeTodoItemNumber() {
            var itemno = this.state.todoItemNumber;
            itemno--;
            if(itemno > 0) {
                this.setState({todoItemNumber:itemno});
                this.setState({[`todolistitem${itemno+1}`]: ''});
                this.state.todo.pop();
            }
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
            return (
                <Container>
                    <Header searchBar rounded backgroundColor='#2c70dd' iosBarStyle='dark-content' androidStatusBarColor='#56a2ce'>
                        <Left>
                            <Button transparent>
                                <Icon name='ios-arrow-back-outline' style={{color: '#fff',fontSize:30}}/>
                            </Button>
                        </Left>
                        <Body style={{display: this.state.header}}>
                            <Title style={{textAlign:'center'}}>View/Create Todo</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={this._toggleModal.bind(this)}>
                                <Icon name='ios-add' style={{color: '#fff',fontSize:30}}/>
                            </Button>
                        </Right>
                    </Header>
                    <Content style={{backgroundColor:'#fff'}}>
                        <Text style={{color: '#999999',textAlign:'center',fontSize:20}}>Sorry, no todo found.</Text>
                    </Content>
                    <Modal isVisible={this.state.isModalVisible} onBackButtonPress={() => this.setState({isModalVisible:false})} avoidKeyboard style={{alignItems:'center',justifyContent:'center'}}>
                        <View style={{ flex: 1,alignItems:'center',justifyContent:'center' }}>
                            <Text style={{fontSize:20,color: '#fff',fontFamily:'raleway-light',textAlign:'center'}}>Enter Todo name:</Text>
                            <Item rounded style={{marginTop:15}}>
                            <Input value={this.state.todotext} style={{height: 40,textAlignVertical:'center',color:'#fff',fontSize:20,fontFamily:'Roboto' ,width: 200 ,textAlign:'center'}} onChangeText={(todotext) => this.setState({todotext: todotext})}/>
                            </Item>
                            <Button onPress={this.onTodoHeaderPress.bind(this)} style={{marginTop: 15,alignSelf:'center'}} rounded success>
                                <Text>Proceed</Text>
                            </Button>
                        </View>
                    </Modal>
                    <Modal animationIn='slideInRight' isVisible={this.state.isSecondModalVisible} onBackButtonPress={this.onTodoHeaderPress.bind(this)} avoidKeyboard style={{alignItems:'center',justifyContent:'center'}}>
                        <View style={{ flex: 1,alignItems:'center',justifyContent:'center' }}>
                            <View style={{flexDirection:'row'}}>
                                <Text 
                                    style={{fontSize:20,color: '#fff',fontFamily:'raleway-light',textAlign:'center'}}>
                                    Create list
                                </Text>
                                <Icon active name='ios-add-circle-outline' style={{color:'#57fe88',marginLeft:10}} onPress={this.updateTodoItemNumber.bind(this)}/>
                                <Icon active name='ios-close-circle-outline' style={{color:'#f44e42',marginLeft:10}} onPress={this.removeTodoItemNumber.bind(this)}/>
                            </View>
                            {
                               this.state.isSecondModalVisible === true ?
                               this.renderList() : null
                            }
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