import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../styles/RetailerStyle';

const LoadingRetailer = () => {
  return(
    <View style={Styles.spinnercontainer}>
      <Text>Loading retailer.. Please wait.</Text>
    </View>
  )
}

export default LoadingRetailer;
