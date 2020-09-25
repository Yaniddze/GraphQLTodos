import { TodoUnit, Todo } from './types';

export class DefaultTodoUnit implements TodoUnit {
  Fetch(): Promise<Todo[]> {
    throw new Error('Todo unit not provided');
  }
}
