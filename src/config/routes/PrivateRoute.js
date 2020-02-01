import React from 'react';
import { 
  Route,
  Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = false;

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
