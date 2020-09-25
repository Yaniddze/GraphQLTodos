export type Todo = {
  id: string;
  title: string;
  imgUrl: string;
}

export type FetchingTodos = {
  fetching: boolean;
  todos: Todo[];
}

export interface TodoUnit {
  Fetch: () => Promise<Todo[]>;
}
