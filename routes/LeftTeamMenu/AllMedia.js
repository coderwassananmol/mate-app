import React from 'react';
import { Container, Root, ActionSheet , Header, Title, Input, Item, Subtitle , Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Styles from '../../styles/RetailerStyle';
import { Alert } from 'react-native';

export default class AllMedia extends React.Component {
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

        render() {
        }
    }