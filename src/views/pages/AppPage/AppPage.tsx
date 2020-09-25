// Core
import React, { FC, useEffect } from 'react';

// Hooks
import { Link } from 'react-router-dom';
import { useAuthorizedStorage } from '../../../hooks/useAuthorizedStorage';
import { useTodos } from '../../../hooks/useTodos';

// Components
import { Todo } from '../../components/todo';

export const AppPage: FC = () => {
  const { authorized } = useAuthorizedStorage();
  const { fetchTodos, todosState } = useTodos();

  useEffect(() => {
    if (authorized) {
      fetchTodos();
    }
  }, [authorized]);

  const authError = !authorized && 'You should been authorized';
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
      <div>
        <Link to="/auth">
          <button type="button">
            Войти
          </button>
        </Link>
      </div>
    </div>
  );
};
