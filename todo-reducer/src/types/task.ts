export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export type TasksAction =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: Task }
  | { type: 'deleted'; id: number };