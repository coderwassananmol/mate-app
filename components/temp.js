import React from 'react';
import Styles from '../styles/RetailerStyle';
import { View,
        TextInput,
        Text,
        Dimensions,
        ScrollView,
        Image,
        Button,
        Animated,
        TouchableHighlight,
        Keyboard,
        KeyboardAvoidingView,
        Platform,
        ActivityIndicator
      } from 'react-native';

type Props = {
  isFetching : boolean,
}

const Temp = (props : Props) => {
    const {
          isFetching
      } = props;
      console.log(isFetching);
      return (
        <View style={Styles.container}>
          {isFetching ? <ActivityIndicator /> : null}
        </View>
      );
};

export default Temp;
