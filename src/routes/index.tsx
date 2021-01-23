import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/Home';
import UserProfile from '../pages/UserProfile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PostCreation from './../pages/PostCreation';
import ForgotPassword from './../pages/ForgotPassword';
import ResetPassword from './../pages/ResetPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/post/new" component={PostCreation} isPrivate />
    <Route path="/profile" component={UserProfile} isPrivate />
    <Route path="/home" component={Home} isPrivate />
  </Switch>
);
export default Routes;
