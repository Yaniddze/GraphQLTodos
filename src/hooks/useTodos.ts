// Core
import { useContext, useState } from 'react';

// Context
import { TodoUnitContext } from '../dependecies/AppDependencies';
import { FetchingTodos } from '../model/todos/types';

type ReturnType = {
  todosState: FetchingTodos;
  fetchTodos: () => void;
}

export const useTodos = (): ReturnType => {
  const [todosState, setTodosState] = useState<FetchingTodos>({
    fetching: false,
    todos: [],
  });

  const todoUnit = useContext(TodoUnitContext);

  const fetchTodos = (): void => {
    if (todosState.fetching) return;

    setTodosState({
      fetching: true,
      todos: [],
    });

    todoUnit.FetchAll()
      .then((res) => {
        setTodosState({
          fetching: false,
          todos: res,
        });
      })
      .catch(() => {
        setTodosState({
          fetching: false,
          todos: [],
        });
      });
  };

  return {
    todosState,
    fetchTodos,
  };
};
