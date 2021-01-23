import React from 'react';

import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import UserProfile from '../pages/UserProfile';
import Route from './Route';
import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';
import PostCreation from './../pages/PostCreation/index';
import ForgotPassword from './../pages/ForgotPassword/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/profile" component={UserProfile} isPrivate />
    <Route path="/" exact component={Home} />
    <Route path="/home" component={Home} isPrivate />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/post/new" component={PostCreation} isPrivate />
  </Switch>
);
export default Routes;
