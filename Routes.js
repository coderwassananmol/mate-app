import {Router,Stack,Scene} from 'react-native-router-flux';
import User from './routes/User';
import Registration from './routes/Registration';
import EmailRegistration from './routes/EmailRegistration';
import EmailVerified from './routes/EmailVerified';
import Client from './routes/Client';
import React from 'react';
import {Text} from 'react-native';
import Styles from './styles/RetailerStyle';
const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="User" component={User} hideNavBar/>
      <Scene key="EmailRegistration" component={EmailRegistration} hideNavBar />
      <Scene key="UserRegistration" component={Registration} hideNavBar/>
      <Scene key="EmailTokenVerify" component={EmailVerified} type="replace" hideNavBar />
      <Scene key="Client" component={Client} hideNavBar initial/>
    </Stack>
  </Router>
);

export default Routes;
