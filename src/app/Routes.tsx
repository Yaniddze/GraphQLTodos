// Core
import React, { FC } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// Pages
import { AuthPage } from '../views/pages/AuthPage';
import { AppPage } from '../views/pages/AppPage';

// Dependencies
import { AuthDependencies } from '../dependecies/AuthDependencies';

type PropTypes = {
  children?: never;
}

export const Routes: FC<PropTypes> = () => (
  <BrowserRouter>
    <Switch>

      <Route path="/app">
        <AppPage />
      </Route>

      <Route path="/auth">
        <AuthDependencies>
          <AuthPage />
        </AuthDependencies>
      </Route>

      <Redirect to="/app" />

    </Switch>
  </BrowserRouter>
);
