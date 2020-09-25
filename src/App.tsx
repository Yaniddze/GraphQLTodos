// Core
import React, { FC } from 'react';

// App
import { Routes } from './app/Routes';
import { Themed } from './app/Themed';
import { GlobalStyles } from './app/GlobalStyles';

export const App: FC = () => (
  <Themed>
    <>
      <GlobalStyles />
      <Routes />
    </>
  </Themed>
);
