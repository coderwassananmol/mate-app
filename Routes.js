import {Router,Stack,Scene} from 'react-native-router-flux';
import User from './routes/User';
import Registration from './routes/Registration';
import EmailRegistration from './routes/EmailRegistration';
import EmailVerified from './routes/EmailVerified';
import Team from './routes/Team';
import AllMedia from './routes/LeftTeamMenu/AllMedia';
import Goal from './routes/LeftTeamMenu/Goal';
import Notes from './routes/LeftTeamMenu/Notes';
import TeamReminder from './routes/LeftTeamMenu/TeamReminder';
import ToDo from './routes/LeftTeamMenu/ToDo';
import Client from './routes/Client';
import React from 'react';
import {Text} from 'react-native';
import Styles from './styles/RetailerStyle';
const Routes = () => (
  <Router navigationBarStyle={{ backgroundColor: '#81b71a' }}>
    <Stack key="root">
      <Scene key="User" component={User} hideNavBar/>
      <Scene key="EmailRegistration" component={EmailRegistration} hideNavBar />
      <Scene key="UserRegistration" component={Registration} hideNavBar/>
      <Scene key="EmailTokenVerify" component={EmailVerified} type="replace" hideNavBar />
      <Scene key="Team" component={Team} hideNavBar/>
      <Scene key="Client" component={Client} title="Welcome, user!" initial/>
      <Scene key="AllMedia" component={AllMedia} hideNavBar/>
      <Scene key="Goal" component={Goal} hideNavBar/>
      <Scene key="Notes" component={Notes} hideNavBar/>
      <Scene key="TeamReminder" component={TeamReminder} hideNavBar/>
      <Scene key="ToDo" component={ToDo} hideNavBar/>
    </Stack>
  </Router>
);

export default Routes;
