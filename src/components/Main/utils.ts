import { ToDo } from './Main';
const LOCAL_STORAGE_ITEM_NAME = 'toDos';

export const sortToDos = (toDos: ToDo[]): ToDo[] =>
  toDos.sort((prev, curr) => Date.parse(curr.date) - Date.parse(prev.date));

export const setToDosToLocalStorage = (toDos: ToDo[]): void => {
  localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, JSON.stringify(toDos));
};

export const getToDosFromLocalStorage = (): ToDo[] => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_NAME));
  } catch (error) {
    throw new Error(error);
  }
};
