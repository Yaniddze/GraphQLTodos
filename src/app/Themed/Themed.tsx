// Core
import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { greenTheme } from './themes/greenTheme';

type PropTypes = {
  children: ReactElement;
}

export const Themed: FC<PropTypes> = ({
  children,
}: PropTypes) => (
  <ThemeProvider theme={greenTheme}>
    {children}
  </ThemeProvider>
);
