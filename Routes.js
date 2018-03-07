/*
    All the routes come here. Add any route and link it here to access it.
    Use Actions.routename() to access any route.
*/

/* Do not remove the below line. */
import {Router,Stack,Scene,Lightbox} from 'react-native-router-flux';
import React from 'react';
/* 
  User Registration and Login
    * Login 
    * Registration
    * E-Mail Registration
    * E-Mail Token Verification
    * Company Registration
*/
import Login from './routes/Login';
import Registration from './routes/Registration';
import EmailRegistration from './routes/EmailRegistration';
import EmailToken from './routes/EmailToken';

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
import { Root } from 'native-base';
import Client from './routes/Client';
import Hotel from './routes/Hotel';

/* 
    Bottom Team Menu
      * Code
*/
import Code from './routes/BottomTeamMenu/Code'
import Facebook from './routes/Marketing/Facebook';
import MarketingScreen from './routes/Marketing/MarketingScreen';
const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="Login" component={Login} hideNavBar />
      <Scene key="EmailRegistration" component={EmailRegistration} hideNavBar />
      <Scene key="Registration" component={Registration} hideNavBar type="reset" />
      <Scene key="EmailToken" component={EmailToken} hideNavBar />
      <Scene key="Team" component={Team} hideNavBar/>
      <Scene key="Client" component={Client} title="Welcome, user!"/>
      <Scene key="AllMedia" component={AllMedia} hideNavBar/>
      <Scene key="Goal" component={Goal} hideNavBar/>
      <Scene key="Notes" component={Notes} hideNavBar/>
      <Scene key="Hotel" component={Hotel} hideNavBar />
      <Scene key="TeamReminder" component={TeamReminder} hideNavBar/>
      <Scene key="ToDo" component={Todo} hideNavBar/>
      <Scene key="Code" component={Code} hideNavBar/>
      <Scene key="Facebook" component={Facebook} hideNavBar initial/>
      <Scene key="MarketingScreen" component={MarketingScreen} hideNavBar />
    </Scene>
  </Router>
);

export default Routes;
