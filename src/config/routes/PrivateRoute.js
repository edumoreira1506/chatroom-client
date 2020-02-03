import React from 'react';
import { 
  Route,
  Redirect
} from 'react-router-dom';
import { isAuthenticated, getUsername } from '../../models/User';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = isAuthenticated();
  const username = getUsername();

  return (
    <Route 
      { ...rest } 
      render={props => (
        authenticated ? (
          <Component { ...props} username={username} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> 
        )
      )} 
    />
  )
}

export default PrivateRoute
