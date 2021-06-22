import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

const TEST_TEXT_1 = 'Go to work';
const TEST_TEXT_2 = 'Feed my dog';
const TEST_TEXT_3 = 'Feed my cat';

const createToDo = (text: string): void => {
  const input = screen.getByTestId('input').firstChild as HTMLInputElement;
  const addButton = screen.getByTestId('add');
  fireEvent.change(input, { target: { value: text } });
  fireEvent.click(addButton);
};

describe('To Do List', () => {
  afterEach(() => {
    localStorage.removeItem('toDos');
  });

  beforeEach(() => {
    render(<App />);
  });

  test('should create ToDO', () => {
    createToDo(TEST_TEXT_1);

    const todos = screen.getAllByTestId('todo');
    const todoText = screen.getByTestId('todo-text').firstChild;

    expect(todoText.textContent).toBe(TEST_TEXT_1);
    expect(todos.length).toBe(1);
    const input = screen.getByTestId('input').firstChild as HTMLInputElement;
    expect(input.value).toBe('');
  });

  test('should delete ToDo', () => {
    createToDo(TEST_TEXT_1);

    const deleteButton = screen.getByTestId('delete');
    fireEvent.click(deleteButton);
    const todo = screen.queryByTestId('todo');
    expect(todo).not.toBeInTheDocument();
  });

  test('should update ToDo', () => {
    createToDo(TEST_TEXT_2);
    const editButton = screen.getByTestId('edit');
    fireEvent.click(editButton);
    createToDo(TEST_TEXT_3);
    const todoText = screen.getByTestId('todo-text').firstChild;
    expect(todoText.textContent).toBe(TEST_TEXT_3);
  });

  test('should save ToDo to LocalStorage', () => {
    createToDo(TEST_TEXT_1);
    const toDoFromLocalStorage = JSON.parse(localStorage.getItem('toDos'))[0].toDo;
    expect(toDoFromLocalStorage).toBe(TEST_TEXT_1);
  });
});
