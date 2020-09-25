// Core
import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import { AuthPage } from '../views/pages/AuthPage';

// Dependencies
import { AuthDependencies } from '../dependecies/AuthDependencies';

type PropTypes = {
  children?: never;
}

export const Routes: FC<PropTypes> = () => (
  <BrowserRouter>
    <Switch>

      <Route path="/app">
        <div>
          Hello!
        </div>
      </Route>

      <Route path="/auth">
        <AuthDependencies>
          <AuthPage />
        </AuthDependencies>
      </Route>

    </Switch>
  </BrowserRouter>
);
