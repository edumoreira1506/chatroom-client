import React from 'react'
import { 
  BrowserRouter,
  Switch
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Login from '../../pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path="/" exact component={Login} />
      <PublicRoute path="/login" exact component={Login} />

      <PrivateRoute path="/chat" exact component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes
