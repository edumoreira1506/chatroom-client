import React from 'react'
import { HashRouter } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Login from '../../pages/Login';
import Chat from '../../pages/Chat';

const Routes = () => (
  <HashRouter>
    <PublicRoute path="/" exact component={Login} />
    <PublicRoute path="/login" exact component={Login} />

    <PrivateRoute path="/chat" exact component={Chat} />
  </HashRouter>
);

export default Routes
