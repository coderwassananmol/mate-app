/*
    All the routes come here. Add any route and link it here to access it.
    Use Actions.routename() to access any route.
*/

/* Do not remove the below line. */
import {Router,Stack,Scene} from 'react-native-router-flux';

/* 
  User Registration and Login
    * User 
    * Registration
    * E-Mail
    * E-Mail Verified
*/
import User from './routes/User';
import Registration from './routes/Registration';
import EmailRegistration from './routes/EmailRegistration';
import EmailVerified from './routes/EmailVerified';

/* 
    Team Management Dashboard 
      * Left Team Menu
      * Bottom Team Menu
*/
import Team from './routes/Team';

/* 
    Left Team Menu
      * All Media
      * Goal
      * Notes
      * Team Reminder
      * Todo
*/
import AllMedia from './routes/LeftTeamMenu/AllMedia';
import Goal from './routes/LeftTeamMenu/Goal';
import Notes from './routes/LeftTeamMenu/Notes';
import TeamReminder from './routes/LeftTeamMenu/TeamReminder';
import Todo from './routes/LeftTeamMenu/ToDo';

/*
    Client Screen
*/
import Client from './routes/Client';
import Hotel from './routes/Hotel';

/* 
    Bottom Team Menu
      * Code
*/
import Code from './routes/BottomTeamMenu/Code'
const Routes = () => (
  <Router navigationBarStyle={{ backgroundColor: '#81b71a' }}>
    <Stack key="root">
      <Scene key="User" component={User} hideNavBar/>
      <Scene key="EmailRegistration" component={EmailRegistration} hideNavBar />
      <Scene key="UserRegistration" component={Registration} hideNavBar/>
      <Scene key="EmailTokenVerify" component={EmailVerified} type="replace" hideNavBar />
      <Scene key="Team" component={Team} hideNavBar initial/>
      <Scene key="Client" component={Client} title="Welcome, user!"/>
      <Scene key="AllMedia" component={AllMedia} hideNavBar/>
      <Scene key="Goal" component={Goal} hideNavBar/>
      <Scene key="Notes" component={Notes} hideNavBar/>
      <Scene key="Hotel" component={Hotel} hideNavBar/>
      <Scene key="TeamReminder" component={TeamReminder} hideNavBar/>
      <Scene key="ToDo" component={Todo} hideNavBar/>
      <Scene key="Code" component={Code} hideNavBar/>
    </Stack>
  </Router>
);

export default Routes;