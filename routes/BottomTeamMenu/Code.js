import React from 'react';
import { Container, Row ,Badge ,Card, Grid, Col, List, ListItem, CardItem, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Alert, View,Keyboard, LayoutAnimation , WebView, Animated, TextInput, KeyboardAvoidingView, AsyncStorage, ScrollView, Switch } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Pusher from 'pusher-js/react-native'
import { connect } from 'react-redux';
import Modal from 'react-native-modal'

export default class Code extends React.Component {
    executeJS() {
        return "$('header').remove()";
    }

    render() {
        return (
            <WebView 
                initialScale = '100'
                injectedJavaScript="$('header').remove()"
                source={{uri : 'https://carbon.now.sh'}} />
        );
    }
}