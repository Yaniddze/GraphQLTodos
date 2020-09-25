import React, { createContext, FC, ReactElement } from 'react';
import { AuthUnit } from '../model/auth/types';
import { DefaultAuthUnit, SimpleAuthUnit } from '../model/auth';

export const AuthUnitContext = createContext<AuthUnit>(new DefaultAuthUnit());

type PropTypes = {
  children: ReactElement;
}

export const AuthDependencies: FC<PropTypes> = ({
  children,
}: PropTypes) => (
  <AuthUnitContext.Provider value={new SimpleAuthUnit()}>
    {children}
  </AuthUnitContext.Provider>
);
