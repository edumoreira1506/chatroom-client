import React from 'react';
import { 
  Route,
  Redirect
} from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  const authenticated = false;

  return (
    <Route 
      { ...rest } 
      render={props => (
        authenticated ? (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> 
        ) : (
          <Component { ...props} />
        )
      )} 
    />
  )
}

export default PublicRoute
