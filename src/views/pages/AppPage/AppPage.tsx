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
import { FourColorsLoader } from '../../components/loaders';

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

  const loader = todosState.fetching && <FourColorsLoader />;

  return (
    <div>
      { authError }
      { loader }
      <div>
        { todos }
      </div>
    </div>
  );
};
