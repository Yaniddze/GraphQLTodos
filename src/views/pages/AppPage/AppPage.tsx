// Core
import React, { FC, useEffect } from 'react';

// Hooks
import { Link } from 'react-router-dom';
import { useAuthorizedStorage } from '../../../hooks/useAuthorizedStorage';
import { useTodos } from '../../../hooks/useTodos';

// Components
import { Todo } from '../../components/todo';
import { SquareButtonWithShadow } from '../../components/buttons';
import { AuthErrorWrapper } from './AuthErrorWrapper';

export const AppPage: FC = () => {
  const { authorized } = useAuthorizedStorage();
  const { fetchTodos, todosState } = useTodos();

  useEffect(() => {
    if (authorized) {
      fetchTodos();
    }
  }, [authorized]);

  const authError = !authorized && (
    <AuthErrorWrapper>
      <div>
        You should been authorized
      </div>
      <div>
        <Link to="/auth">
          <SquareButtonWithShadow>
            Войти
          </SquareButtonWithShadow>
        </Link>
      </div>
    </AuthErrorWrapper>
  );
  const todos = !todosState.fetching && todosState.todos
    .map((todo) => (
      <div key={todo.id}>
        <Todo item={todo} />
      </div>
    ));

  return (
    <div>
      { authError }
      <div>
        {todos}
      </div>
    </div>
  );
};
