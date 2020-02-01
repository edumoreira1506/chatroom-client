import React from 'react';
import { 
  Route,
  Redirect
} from 'react-router-dom';
import { isAuthenticated } from '../../models/User';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = isAuthenticated();

  return (
    <Route 
      { ...rest } 
      render={props => (
        authenticated ? (
          <Component { ...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> 
        )
      )} 
    />
  )
}

export default PrivateRoute
