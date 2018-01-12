import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { fetchRetailer } from '../actions/Retailer';
import NoRetailer from './NoRetailer';
import LoadingRetailer from './LoadingRetailer';
import Styles from '../styles/RetailerStyle';

export default class ShowRetailer extends Component {
  componentWillMount() {
     this.props.dispatch(fetchRetailer());
   }

   fetchingRetailerSpinner() {
    return (<View style={Styles.spinnercontainer}>
              <ActivityIndicator
                animating={true}
                color={'#3F51B5'}
                style={styles.spinner}
              />
          </View>);
    }

    render() {
      const { retailer, fetching, fetched } = this.props;
      if (fetching) {
        return <LoadingRetailer />;
      }

      if (fetched && !retailer) {
          return <NoRetailer />;
      }

      return (
        <View style={Styles.spinnercontainer}>
           {retailer.map((retailer) =>
                <View style={Styles.spinnercontainer}>
                    <Text>...</Text>
                </View>
            )}
        </View>
      );
  }
}
}
