import React from 'react';
import { Font } from 'expo';
import AppLoading from 'expo/src/launch/AppLoading';
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
        ActivityIndicator,
        DrawerLayoutAndroid,
        TouchableNativeFeedback,
        ImageBackground,
        TouchableWithoutFeedback,
        TouchableOpacity
      } from 'react-native';

const Navbar = () => {
    return (
        <View style={Styles.NavBarContainer}>
            <TouchableOpacity
            onPress={() => console.log('Hamburger button pressed')}
            style={[Styles.navBarItem, { paddingLeft: 10}]}>
            <Image
                style={{width: 30, height: 50}}
                resizeMode="contain"
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'}}></Image>
            </TouchableOpacity>
        </View>
    );
}

export default Navbar;