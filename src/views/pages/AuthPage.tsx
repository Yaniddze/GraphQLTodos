// Core
import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

// Hooks
import { useAuth } from '../../hooks/useAuth';

type PropTypes = {
  children?: never;
}

export const AuthPage: FC<PropTypes> = () => {
  const { authState, tryAuth } = useAuth();

  const redirection = authState.data.success && <Redirect to="/app" />;

  return (
    <div>
      {redirection}
    </div>
  );
};
