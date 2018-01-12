import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import {fetchRetailer} from '../actions/Retailer';
import { connect } from 'react-redux';
import Styles from '../styles/RetailerStyle';
import LoadingRetailer from './LoadingRetailer';
import NoRetailer from './NoRetailer';
class RetailerContainer extends Component {

  componentWillMount() {
    this.props.fetchRetailer();
  }

  render() {
    const {isFetching} = this.props.retailer;
    if(isFetching === null || isFetching == true) {
      return (
        <LoadingRetailer />
      )
    }
    return (
      <View style={Styles.spinnercontainer}>
        <Text>FETCHED!</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    retailer : state.retailer
  }
}

export default connect(mapStateToProps,{fetchRetailer})(RetailerContainer);
