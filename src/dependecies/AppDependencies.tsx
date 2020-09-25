import React, { createContext, FC, ReactElement } from 'react';
import { TodoUnit } from '../model/todos/types';
import { DefaultTodoUnit, GraphQLTodoUnit } from '../model/todos';

export const TodoUnitContext = createContext<TodoUnit>(new DefaultTodoUnit());

type PropTypes = {
  children: ReactElement;
}

export const AppDependencies: FC<PropTypes> = ({
  children,
}: PropTypes) => (
  <TodoUnitContext.Provider value={new GraphQLTodoUnit()}>
    {children}
  </TodoUnitContext.Provider>
);
