import React from 'react';
import Store from './Store';
import { Provider } from 'react-redux'
import { Font } from 'expo';
import AppLoading from 'expo/src/launch/AppLoading';
import User from './components/User';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <User />
      </Provider>
    );
  }
}
