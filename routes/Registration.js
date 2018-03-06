import React from 'react';
import Styles from '../styles/RetailerStyle';
import { View,
        ScrollView,
        Image,
        Animated,
        TouchableHighlight,
        Keyboard,
        KeyboardAvoidingView,
        Platform,
        ActivityIndicator,
        TouchableOpacity
      } from 'react-native';
/*
      Native base components
*/
import { 
    Container, Row, Badge, Card, Grid, Col, List, ListItem, Form, CardItem, Label, Root, ActionSheet, Header, 
    Title, Input, Item, Picker, Spinner, Subtitle, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text 
} from 'native-base';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {Register} from '../actions/Register';
import Modal from 'react-native-modal';
class Registration extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname : '',
            username : '',
            password : '',
            confirmpassword : '',
            companyname : '',
            companydescription :'',
            companyurl : '',
            position : '',
            strength : '',
            domain : '',
            companyaddress : '',
            phonenumber : '',
            country_code : '91',
            country : 'IN'
        };
    }

      showToast(message,type,time) {
        Toast.show({
            text: message,
            position: 'bottom',
            buttonText: 'Okay',
            duration : time,
            type:type
          });
      }

      async onValueChange(value) {
      var c = value.match(/\D+/)[0];
      var cc = value.match(/\d+/)[0];
       await this.setState({
          country: c,
          country_code : cc
        });
      }

    onPress() {
      if(this.state.firstname == '' || this.state.lastname == '' || this.state.username == '' || this.state.password == '' || this.state.password == '' ||
      this.state.confirmpassword == '' || this.state.companyname == '' || this.state.companydescription == '' || 
      this.state.companyurl == '' || this.state.position == '' || this.state.strength == '' || this.state.domain == '' || 
      this.state.companyaddress == '' || this.state.country == '' || this.state.phonenumber == '') {
        this.showToast("Please fill all the fields.", "danger",4000);
        if(this.state.firstname == '') {
          this.setState({
            firstNameError : true
          })
        }
        else {
          this.setState({
            firstNameError : false
          })
        }
        if(this.state.lastname == '') {
          this.setState({
            lastNameError : true
          })
        }
        else {
          this.setState({
            lastNameError : false
          })
        }
        if(this.state.username == '') {
          this.setState({
            usernameError : true
          })
        }
        else {
          this.setState({
            usernameError : false
          })
        }
        if(this.state.password == '') {
          this.setState({
            passwordError : true
          })
        }
        else {
          this.setState({
            passwordError : false
          })
        }
        if(this.state.confirmpassword == '') {
          this.setState({
            confirmpasswordError : true
          })
        }
        else {
          this.setState({
            confirmpasswordError : false
          })
        }
        if(this.state.companyname == '') {
          this.setState({
            companyNameError : true
          })
        }
        else {
          this.setState({
            companyNameError : false
          })
        }
        if(this.state.companydescription == '') {
          this.setState({
            companydescriptionError : true
          })
        }
        else {
          this.setState({
            companydescriptionError : false
          })
        }
        if(this.state.position == '') {
          this.setState({
            positionError : true
          })
        }
        else {
          this.setState({
            positionError : false
          })
        }
        if(this.state.strength == '') {
          this.setState({
            strengthError : true
          })
        }
        else {
          this.setState({
            strengthError : false
          })
        }
        if(this.state.domain == '') {
          this.setState({
            domainError : true
          })
        }
        else {
          this.setState({
            domainError : false
          })
        }
        if(this.state.companyaddress == '') {
          this.setState({
            addressError : true
          })
        }
        else {
          this.setState({
            addressError : false
          })
        }
        if(this.state.country == '') {
          this.setState({
            countryError : true
          })
        }
        else {
          this.setState({
            countryError : false
          })
        }
        if(this.state.phonenumber == '') {
          this.setState({
            phoneError : true
          })
        }
        else {
          this.setState({
            phoneError : false
          })
        }
      }
      else {
        if(this.state.password !== this.state.confirmpassword) {
          this.setState({
            firstNameError : false,
            lastNameError : false,
            passwordError : true,
            companyNameError : false,
            positionError : false,
            strengthError: false,
            domainError : false,
            addressError : false,
            phoneError : false
          })
          this.showToast("Passwords do not match","danger",4000);
        }
        else if(this.state.phonenumber.length !== 10) {
          this.setState({
            firstNameError : false,
            lastNameError : false,
            passwordError : false,
            confirmpasswordError :false,
            companyNameError : false,
            positionError : false,
            strengthError: false,
            domainError : false,
            addressError : false,
            phoneError : true
          })
          this.showToast("Invalid phone number","danger",4000);
        }
        else {
          this.setState({
            firstNameError : false,
            lastNameError : false,
            passwordError : false,
            confirmpasswordError :false,
            companyNameError : false,
            positionError : false,
            strengthError: false,
            domainError : false,
            addressError : false,
            phoneError : false
          })
          var data = JSON.stringify({
            "company_name" : this.state.companyname,
            "company_description" : this.state.companydescription,
            "company_url" : this.state.companyurl,
            "first_name" : this.state.firstname,
            "last_name" : this.state.lastname,
            "username" : this.state.username,
            "mobile_no" : this.state.phonenumber,
            "strength" : this.state.strength,
            "address" : this.state.companyaddress,
            "country" : this.state.country,
            "country_code" : this.state.country_code,
            "password" : this.state.password,
            "password_confirmation" : this.state.confirmpassword
          });
          console.log(this.state.country);
          this.props.Register(data);
        }
      }
    }

    render() {
      return (
          <Container>
          <Header style={{backgroundColor : 'transparent'}} noShadow>
            <Left />
            <Body />
            <Right />
          </Header>
            <Content keyboardShouldPersistTaps='always'>
              <Text style={{textAlign:'center',fontSize:25,marginBottom:30,fontFamily:'Raleway-Medium'}}>
                Register to MATE
              </Text>
              <Form>
                <Item floatingLabel error={true} style={this.state.firstNameError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
                {this.state.firstNameError ? <Icon name='close-circle'/> : null}
                <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>First Name {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
                <Input
                    onChangeText = {(firstname) => this.setState({firstname : firstname})}
                    style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
                    autoFocus
                /> 
              </Item>
            <Item floatingLabel error={true} style={this.state.lastNameError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.lastNameError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Last Name {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(lastname) => this.setState({lastname : lastname})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
             />
            </Item>
            <Item floatingLabel error={true} style={this.state.usernameError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.usernameError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Username {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(username) => this.setState({username : username})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
             />
            </Item>
            <Item floatingLabel error={true} style={this.state.passwordError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.passwordError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Password {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(password) => this.setState({password : password})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
                 secureTextEntry
             />
            </Item>
            <Item floatingLabel error={true} style={this.state.passwordError || this.state.confirmpasswordError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.passwordError || this.state.confirmpasswordError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Confirm Password {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(confirmpassword) => this.setState({confirmpassword : confirmpassword})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
                 secureTextEntry
             />
            </Item>
            <Item floatingLabel error={true} style={this.state.companyNameError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.companyNameError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Company Name {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(companyname) => this.setState({companyname : companyname})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
             />
            </Item>
            <Item floatingLabel error={true} style={this.state.companydescriptionError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.companydescriptionError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Company Description {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(companydescription) => this.setState({companydescription : companydescription})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
             />
            </Item>
            <Item floatingLabel error={true} style={this.state.companyurlError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.companyurlError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Company URL {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(companyurl) => this.setState({companyurl : companyurl})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
                 keyboardType = {Platform.OS === 'ios' ? 'url' : 'default'}
             />
            </Item>
            <Item floatingLabel error={true} style={this.state.positionError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.positionError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Your Position {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(position) => this.setState({position : position})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
             />
            </Item>
            <Item floatingLabel error={true} style={this.state.strengthError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.strengthError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Company Strength {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(strength) => this.setState({strength : strength})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
                 keyboardType = 'numeric'
                 maxLength = {4}
             />
            </Item>
            <Item floatingLabel error={true} style={this.state.domainError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.domainError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Company Domain {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(domain) => this.setState({domain : domain})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
             />
            </Item>
            <Item floatingLabel error={true} style={this.state.addressError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.addressError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Company Registered Address {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(companyaddress) => this.setState({companyaddress : companyaddress})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
                 multiline
             />
            </Item>
            <Text style={{color: '#000', fontFamily:'Roboto-Light', fontSize:17, marginTop: 15, marginLeft: 15}}>Pick a country {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Text>
            <Picker
              iosHeader="Select country"
              mode="dropdown"
              selectedValue={this.state.country}
              onValueChange={this.onValueChange.bind(this)}
              style={{marginLeft: 15}}
            >
              <Item label="India" value="IN91" />
              <Item label="USA" value="US1" />
              <Item label="United Kingdom" value="UK44" />
              <Item label="Germany" value="GR49" />
              <Item label="Canada" value="CA1" />
            </Picker>
            <Item floatingLabel error={true} style={this.state.phoneError ? {borderBottomColor:'#f84646'} : {borderBottomColor : '#4c9ef3'}}>
             {this.state.phoneError ? <Icon name='close-circle'/> : null}
             <Label style={{textAlign:'left',fontFamily:'Roboto-Light'}}>Your Phone Number {<Text style={{color : '#ee3232', fontSize: 12}}>* required</Text>}</Label>
             <Input
                 onChangeText = {(phonenumber) => this.setState({phonenumber : phonenumber})}
                 style={{fontSize:17,color: '#000',marginTop:15,textAlign:'left',fontFamily:'Roboto-Light'}}
                 keyboardType='phone-pad'
                 maxLength = {10}
             />
            </Item>
            <Button 
              full
              primary
              onPress={this.onPress.bind(this)}
              style={{marginTop : 20}}
            >
                <Text style={{textAlign:'left',textAlignVertical:'center'}}>Submit</Text>
            </Button>
            </Form>
          </Content>
        </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    register : state.User
  }
}

export default connect(mapStateToProps,{Register})(Registration);