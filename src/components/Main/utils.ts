import { ToDo } from './Main';

export const sortToDos = (toDos: ToDo[]): ToDo[] =>
  toDos.sort((prev, curr) => Date.parse(curr.date) - Date.parse(prev.date));
