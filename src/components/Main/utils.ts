import { ToDo } from './Main';
const LS_ITEM_NAME = 'toDos';

export const sortToDos = (toDos: ToDo[]): ToDo[] =>
  toDos.sort((prev, curr) => Date.parse(curr.date) - Date.parse(prev.date));

export const setToDosToLS = (toDos: ToDo[]): void => {
  localStorage.setItem(LS_ITEM_NAME, JSON.stringify(toDos));
};

export const getToDosFromLS = (): ToDo[] => JSON.parse(localStorage.getItem(LS_ITEM_NAME));
