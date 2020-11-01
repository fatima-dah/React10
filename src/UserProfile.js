import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const git = [{ url: 'https://github.com/fatima-dah' }];

function UserProfile(props) {
  const filteredPost = git.filter((post) => post.url);
  return (
    <Router>
      <div>
        {filteredPost.map((post) => (
          <ul>
            <li>
              Myprofil : <Link to="/user-profile/:FatimaDah">Fatoush</Link>
            </li>
            <li>
              {' '}
              comradeProfil: <Link to="/user-profile/:Florian">Florian</Link>
            </li>
          </ul>
        ))}
        <Switch>
          <Route path="/user-profile/:githubLogin" />
        </Switch>
      </div>
    </Router>
  );
}

export default UserProfile;
