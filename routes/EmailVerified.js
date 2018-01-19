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
        ActivityIndicator
      } from 'react-native';
import { connect } from 'react-redux';
import { VerifyToken } from '../actions/VerifyToken';
import { Actions } from 'react-native-router-flux';

class EmailVerified extends React.Component {

    componentWillMount() {
        this.props.VerifyToken("$2y$10$x39YYomPLUSZnpncNVGdMupAiLp6uoLRlSNXsalRKZByTDSic1oXy");
    }

    render() {
        console.log(this.props.user);
        const {
            isFetching,errorMessage,data,hasError
        } = this.props.user;
        return (
            <View style={Styles.container}>
            {
                isFetching == null ? null :
                  isFetching ?
                  <View style={Styles.container}>
                    <ActivityIndicator />
                  </View> :
                  !hasError ?
                  <View style={Styles.container}>
                    <Text>{data}</Text>
                  </View> :
                  <View style={Styles.container}>
                    <Text>{errorMessage}</Text>
                    <Button title="CLICK TO CONTINUE" onPress={Actions.User}/>
                  </View>
            }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        user : state.EmailTokenVerify
    }
}

export default connect(mapStateToProps,{VerifyToken})(EmailVerified);