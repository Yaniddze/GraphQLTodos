// Core
import { useContext, useState } from 'react';

// Context
import { TodoUnitContext } from '../dependecies/AppDependencies';
import { FetchingTodo } from '../model/todos/types';

type ReturnType = {
  todoState: FetchingTodo;
  fetchTodo: (id: string) => void;
}

export const useTodo = (): ReturnType => {
  const [todoState, setTodoState] = useState<FetchingTodo>({
    fetching: false,
    todo: {
      id: 'none',
      description: 'none',
      img: 'none',
      title: 'none',
    },
  });

  const todoUnit = useContext(TodoUnitContext);

  const fetchTodo = (id: string): void => {
    if (todoState.fetching) return;

    setTodoState((old) => ({
      fetching: true,
      ...old,
    }));

    todoUnit.ById(id)
      .then((res) => {
        setTodoState({
          fetching: false,
          todo: res,
        });
      })
      .catch(() => {
        setTodoState({
          fetching: false,
          todo: {
            id: 'error',
            description: 'error',
            img: 'error',
            title: 'error',
          },
        });
      });
  };

  return {
    todoState,
    fetchTodo,
  };
};
