import React, { useState, useEffect } from 'react';
import { StyledContainer } from './styles';
import { ToDoInput } from '../ToDoInput';
import { ToDoList } from '../ToDoList';
import { sortToDos, getToDosFromLocalStorage, setToDosToLocalStorage } from './utils';

type Props = {
  header: string;
};

export type ToDo = {
  toDo: string;
  date: string;
  id: string;
};

export const DEFAULT_INPUT_VALUE = '';

export const Main: React.FC<Props> = ({ header }) => {
  const [toDos, setToDos] = useState<ToDo[]>(getToDosFromLocalStorage() || []);
  const [editedToDo, setEditedToDo] = useState<string>(DEFAULT_INPUT_VALUE);

  useEffect(() => {
    setToDosToLocalStorage(toDos);
  }, [toDos]);

  const addTodo = (toDo: ToDo) => {
    setToDos((prevState) => [...prevState, toDo]);
  };

  const deleteTodo = (id: string) => {
    setToDos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const editTodo = (toDo: string) => {
    setEditedToDo(toDo);
  };

  return (
    <StyledContainer>
      <h1>{header}</h1>
      <ToDoInput buttonText="Add TODO" addTodo={addTodo} editedToDo={editedToDo} />
      <ToDoList toDos={sortToDos(toDos)} deleteTodo={deleteTodo} editTodo={editTodo} />
    </StyledContainer>
  );
};
