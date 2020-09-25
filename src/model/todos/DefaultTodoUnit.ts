import { TodoUnit, Todo } from './types';

export class DefaultTodoUnit implements TodoUnit {
  FetchAll(): Promise<Todo[]> {
    throw new Error('Todo unit not provided');
  }

  ById(id: string): Promise<Todo> {
    throw new Error('Todo unit not provided');
  }
}
