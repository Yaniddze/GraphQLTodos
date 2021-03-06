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
import { DetailedPage } from '../views/pages/DetailedPage';

// Dependencies
import { AuthDependencies } from '../dependecies/AuthDependencies';
import { AppDependencies } from '../dependecies/AppDependencies';

type PropTypes = {
  children?: never;
}

export const Routes: FC<PropTypes> = () => (
  <BrowserRouter>
    <Switch>

      <Route path="/app">
        <AppDependencies>
          <AppPage />
        </AppDependencies>
      </Route>

      <Route path="/detailed/:id">
        <AppDependencies>
          <DetailedPage />
        </AppDependencies>
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
