export type Todo = {
  id: string;
  title: string;
  description: string;
  img: string;
}

export type FetchingTodos = {
  fetching: boolean;
  todos: Todo[];
}

export interface TodoUnit {
  FetchAll: () => Promise<Todo[]>;
  ById: (id: string) => Promise<Todo>;
}
