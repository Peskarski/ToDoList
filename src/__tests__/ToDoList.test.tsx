import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

const TEST_TEXT_1 = 'Go to work';
const TEST_TEXT_2 = 'Feed my dog';
const TEST_TEXT_3 = 'Feed my cat';

const createToDo = (text: string): void => {
  const input = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: 'Add TODO' });
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

  it('should create ToDO', () => {
    createToDo(TEST_TEXT_1);
    const todos = screen.getAllByRole('listitem');
    const todoText = screen.getByText(TEST_TEXT_1);
    expect(todoText).toBeInTheDocument();
    expect(todos.length).toBe(1);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('');
  });

  it('should delete ToDo', () => {
    createToDo(TEST_TEXT_1);
    const deleteButton = screen.getByRole('button', {
      name: /delete/i,
    });
    const todos = screen.getByRole('listitem');
    fireEvent.click(deleteButton);
    expect(todos).not.toBeInTheDocument();
  });

  it('should edit ToDo', () => {
    createToDo(TEST_TEXT_2);
    const editButton = screen.getByRole('button', {
      name: /edit/i,
    });
    fireEvent.click(editButton);
    const editInput = screen.getByPlaceholderText(TEST_TEXT_2);
    expect(editInput).toBeInTheDocument();
    fireEvent.change(editInput, { target: { value: TEST_TEXT_3 } });
    const confirmEditButton = screen.getByRole('button', { name: 'Edit' });
    fireEvent.click(confirmEditButton);
    const newTodoText = screen.getByText(TEST_TEXT_3);
    expect(newTodoText).toBeInTheDocument();
    const oldTodoText = screen.queryByText(TEST_TEXT_2);
    expect(oldTodoText).not.toBeInTheDocument();
  });

  it('should save ToDo to LocalStorage', () => {
    createToDo(TEST_TEXT_1);
    const toDoFromLocalStorage = JSON.parse(localStorage.getItem('toDos'))[0].toDo;
    expect(toDoFromLocalStorage).toBe(TEST_TEXT_1);
  });
});
