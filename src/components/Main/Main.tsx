import React, { useState } from 'react';
import { StyledContainer } from './styles';
import { ToDoInput, ToDoList } from '../../index';
import { sortToDos } from './utils';

type Props = {
  header: string;
};

export type ToDo = {
  toDo: string;
  date: string;
  id: string;
};

export const DEFAULT_INPUT_VALUE = '';

const Main: React.FC<Props> = ({ header }) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [editedToDo, setEditedToDo] = useState<string>(DEFAULT_INPUT_VALUE);

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

export default Main;
