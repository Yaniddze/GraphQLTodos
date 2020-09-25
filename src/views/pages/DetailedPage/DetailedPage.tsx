// Core
import React, { FC, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';

// Hooks
import { useTodo } from '../../../hooks/useTodo';
import { useAuthorizedStorage } from '../../../hooks/useAuthorizedStorage';

type PropTypes = {
  children?: never;
}

export const DetailedPage: FC<PropTypes> = () => {
  const { id } = useParams();
  const { authorized } = useAuthorizedStorage();
  const { todoState, fetchTodo } = useTodo();

  useEffect(() => {
    if (authorized) {
      fetchTodo(id);
    }
  }, [authorized]);

  const redirection = !authorized && <Redirect to="/auth" />;

  return (
    <div>
      Detailed
      {redirection}
    </div>
  );
};
