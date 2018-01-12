import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from '../styles/RetailerStyle';

const NoRetailer = () => {
  return(
    <View style={Styles.container}>
      <Text>No retailer.</Text>
    </View>
  )
}

export default NoRetailer;
