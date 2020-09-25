// Core
import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

// Components
import { AuthForm } from '../../components/forms';
import { Wrapper } from './Wrapper';

// Hooks
import { useAuth } from '../../../hooks/useAuth';

type PropTypes = {
  children?: never;
}

export const AuthPage: FC<PropTypes> = () => {
  const { authState, tryAuth } = useAuth();

  const redirection = authState.data.success && <Redirect to="/app" />;

  let error = '';

  if (!authState.fetching && !authState.data.success && authState.data.errors.length > 0) {
    error = authState.data.errors[0];
  }

  return (
    <Wrapper>
      <AuthForm
        handleSubmit={tryAuth}
        error={error}
      />
      {redirection}
    </Wrapper>
  );
};
