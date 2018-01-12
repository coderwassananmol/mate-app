import React, { Component } from 'react'
import Styles from '../styles/RetailerStyle';
import { View, TextInput,Text, Dimensions, ScrollView,Image,Button, Animated,TouchableOpacity, Keyboard, KeyboardAvoidingView,Platform } from 'react-native';
import logo from '../assets/logo.png';
const VerifyLicense = () => (
  <View style={Styles.container}>
    <ScrollView style={{flex:1,marginTop:10}}>
      <KeyboardAvoidingView style={Styles.container} behavior="padding">
        <TextInput
            style={Styles.dlnumber}
            placeholder="Enter License Number"
        />
        <TextInput
            style={Styles.dlnumber}
            placeholder="Enter Name"
        />
        <TouchableOpacity style={Styles.register}><Text>Done</Text></TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  </View>
);
export default VerifyLicense;
