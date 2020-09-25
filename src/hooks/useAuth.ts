import { useContext, useState } from 'react';
import { useAuthorizedStorage } from './useAuthorizedStorage';
import { AuthUnitContext } from '../dependecies/AuthDependencies';
import { AuthState } from '../model/auth/types';

type ReturnType = {
  authState: AuthState;
  tryAuth: (username: string, password: string) => void;
}

export const useAuth = (): ReturnType => {
  const authUnit = useContext(AuthUnitContext);
  const { authorized, setAuthorized } = useAuthorizedStorage();

  const [authState, setAuthState] = useState<AuthState>({
    fetching: false,
    data: {
      errors: [],
      success: authorized,
    },
  });

  const tryAuth = (username: string, password: string): void => {
    if (authState.fetching) return;

    setAuthState({
      fetching: true,
      data: {
        success: false,
        errors: [],
      },
    });

    authUnit.Fetch(username, password)
      .then((result) => {
        setAuthState({
          fetching: false,
          data: result,
        });

        setAuthorized(result.success);
      })
      .catch(() => {
        setAuthState({
          fetching: false,
          data: {
            success: false,
            errors: ['Fetching error'],
          },
        });
      });
  };

  return {
    authState,
    tryAuth,
  };
};
