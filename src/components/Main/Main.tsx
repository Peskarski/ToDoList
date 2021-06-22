import React, { useState, useEffect } from 'react';
import { StyledContainer } from './styles';
import { ToDoInput } from '../ToDoInput';
import { ToDoList } from '../ToDoList';
import { sortToDos, getToDosFromLocalStorage, setToDosToLocalStorage } from './utils';
import { getDate } from '../ToDoInput/utils';

type Props = {
  header: string;
};

export type ToDo = {
  toDo: string;
  date: string;
  id: string;
};

export const Main: React.FC<Props> = ({ header }) => {
  const [toDos, setToDos] = useState<ToDo[]>(getToDosFromLocalStorage() || []);

  useEffect(() => {
    setToDosToLocalStorage(toDos);
  }, [toDos]);

  const addTodo = (toDo: ToDo) => {
    setToDos((prevState) => [...prevState, toDo]);
  };

  const deleteTodo = (id: string) => {
    setToDos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const editTodo = (toDo: string, id: string) => {
    const editedToDo: ToDo = {
      toDo,
      date: getDate(),
      id,
    };

    const newToDos: ToDo[] = [...toDos.filter((item) => item.id !== id), editedToDo];

    setToDos(newToDos);
  };

  return (
    <StyledContainer>
      <h1>{header}</h1>
      <ToDoInput buttonText="Add TODO" addTodo={addTodo} />
      <ToDoList toDos={sortToDos(toDos)} deleteTodo={deleteTodo} editTodo={editTodo} />
    </StyledContainer>
  );
};
