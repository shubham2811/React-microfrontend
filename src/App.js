import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import PropTypes from 'prop-types';

import Login from './containers/Login/Login';
import NoMatch from './components/NoMatch';
import Loader from './components/Loader';
import ApplicationError from './components/ErrorPages/ApplicationError';
import { routes } from './config/constants';

const Main = loadable(() => import(/* webpackChunkName: "Main" */ './containers/Main'), {
  fallback: <Loader loading size="lg" />,
});

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        isAuthenticated === 'true' ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routes.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={routes.MAIN}>
          <Main />
        </PrivateRoute>
        <PrivateRoute path={routes.APP}>
          <Main />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path={routes.APPLICATION_ERROR}>
          <ApplicationError />
        </Route>
        <Route path={routes.NO_MATCH}>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default App;
