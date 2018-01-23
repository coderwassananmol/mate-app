import React from 'react';
import { Container, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Font } from 'expo';
import AppLoading from 'expo/src/launch/AppLoading';
import Styles from '../../styles/RetailerStyle';
import { Constants } from 'expo';
import { Alert } from 'react-native';

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

        render() {
            if(!this.state.fontLoaded) {
                return <AppLoading />;
            }
        }
    }