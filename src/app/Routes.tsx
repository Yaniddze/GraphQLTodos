import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const Routes: FC = () => (
  <BrowserRouter>
    <Switch>

      <Route path="/app">
        <div>
          Hello!
        </div>
      </Route>

      <Route path="/auth">
        <div>
          Auth
        </div>
      </Route>

    </Switch>
  </BrowserRouter>
);
