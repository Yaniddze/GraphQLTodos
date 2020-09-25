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
  Fetch: () => Promise<Todo[]>;
}
