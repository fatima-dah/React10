import React from "react";
import MyProfile from './MyProfile';
import UserProfile from './UserProfile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/MyProfile">MyProfile</Link>
            </li>
            <li>
              <Link to="/user-profile/:githubLogin">UserProfile</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
         <Route path="/MyProfile" component={MyProfile} />
        
          <Route path="/user-profile/:githubLogin" component={UserProfile} /> 
         
          </Switch>
      </div>
    </Router>
  );
}






