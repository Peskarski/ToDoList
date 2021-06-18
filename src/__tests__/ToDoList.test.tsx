import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Main } from '../components/Main';

test('it creates a new todo correctly', () => {
  const doc = render(<Main header="ToDo List" />);

  const input = doc.getByTestId('input').firstChild as HTMLInputElement;
  const addButton = doc.getByTestId('add');

  fireEvent.change(input, { target: { value: 'Go to work' } });
  expect(input.value).toBe('Go to work');
  fireEvent.click(addButton);

  const todos = doc.getAllByTestId('todo');
  const todo = doc.getByTestId('todo');
  const todoName = todo.firstChild.firstChild.firstChild;

  expect(todoName.textContent).toBe('Go to work');
  expect(todos.length).toBe(1);
  expect(input.value).toBe('');
});
