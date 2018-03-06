import React from 'react';
import Store from './Store';
import { Provider } from 'react-redux'
import Routes from './Routes';
import { Root } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Root>
          <Routes />
        </Root>
      </Provider>
    );
  }
}
