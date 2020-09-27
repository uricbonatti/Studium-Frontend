import React from 'react';

import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import UserProfile from '../pages/UserProfile';
import Route from './Route';
import SignIn from '../pages/SignIn/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/profile" component={UserProfile} isPrivate />
    <Route path="/" exact component={Home} />
    <Route path="/home" component={Home} isPrivate />
    <Route path="/signin" component={SignIn} />
  </Switch>
);
export default Routes;
