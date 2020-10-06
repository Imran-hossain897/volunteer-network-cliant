import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LogIn from './componets/LogIn/LogIn';
import Home from './componets/Home/Home';
import Nomatch from './componets/NoMatch/Nomatch';
import VolunteerRegister from './componets/VolunteerRegister/VolunteerRegister';
import PrivateRoute from './componets/PrivateRoute/PrivateRoute';
import SelfImposed from './componets/SelfImposed/SelfImposed';
import VolunteerDetails from './componets/VolunteerDetails/VolunteerDetails';


export const userContext = createContext()

function App() {
  const [loggInUser, setLoggInUser] = useState({});
  return (
    <userContext.Provider value={[loggInUser, setLoggInUser]}>
    <Router>
        <Switch>
              <Route path="/home">
              <Home></Home>
              </Route>
              <Route  path="/logIn">
                <LogIn></LogIn>
              </Route>
              <Route  path="/selfImposed">
                <SelfImposed></SelfImposed>
              </Route>
              <PrivateRoute  path="/volunteerRegister/:name">
               <VolunteerRegister></VolunteerRegister>
              </PrivateRoute>
              <Route  path="/volunteerDetails">
                <VolunteerDetails></VolunteerDetails>
              </Route>
              <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="*">
            <Nomatch/>
          </Route>
        </Switch>
      </Router>     
      </userContext.Provider>
  );
}

export default App;
