import {Router,Stack,Scene} from 'react-native-router-flux';
import User from './routes/User';
import Registration from './routes/Registration';
import EmailRegistration from './routes/EmailRegistration';
import React from 'react';
const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="User" component={User} hideNavBar initial/>
      <Scene key="EmailRegistration" component={EmailRegistration} hideNavBar />
      <Scene key="UserRegistration" component={Registration} hideNavBar/>
    </Stack>
  </Router>
);

export default Routes;
