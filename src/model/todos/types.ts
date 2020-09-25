export type Todo = {
  id: string;
  title: string;
  imgUrl: string;
}

export interface TodoUnit {
  Fetch: () => Promise<Todo[]>;
}
