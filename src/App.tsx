// Core
import React, { FC } from 'react';

// App
import { Routes } from './app/Routes';
import { Themed } from './app/Themed';

export const App: FC = () => (
  <Themed>
    <Routes />
  </Themed>
);
