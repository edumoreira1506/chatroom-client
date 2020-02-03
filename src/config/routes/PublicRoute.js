import React from 'react';
import { 
  Route,
  Redirect
} from 'react-router-dom';
import { isAuthenticated } from '../../models/User';
import { routes } from '../constants';

const PublicRoute = ({ component: Component, ...rest }) => {
  const authenticated = isAuthenticated();

  return (
    <Route 
      { ...rest } 
      render={props => (
        authenticated ? (
          <Redirect to={{ pathname: routes.CHAT, state: { from: props.location } }} /> 
        ) : (
          <Component { ...props} />
        )
      )} 
    />
  )
}

export default PublicRoute
