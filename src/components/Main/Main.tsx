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

const Main: React.FC<Props> = ({ header }) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const addTodo = (toDo: ToDo) => {
    setToDos((prevState) => [...prevState, toDo]);
  };

  const deleteTodo = (id: string) => {
    setToDos((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <StyledContainer>
      <h1>{header}</h1>
      <ToDoInput buttonText="Add TODO" addTodo={addTodo} />
      <ToDoList toDos={sortToDos(toDos)} deleteTodo={deleteTodo} />
    </StyledContainer>
  );
};

export default Main;
