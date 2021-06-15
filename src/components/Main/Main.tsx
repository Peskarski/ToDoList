import React, { useState } from 'react';
import { StyledContainer } from './styles';
import ToDoInput from '../ToDoInput/ToDoInput';
import ToDoList from '../ToDoList/ToDoList';

type Props = {
  header: string;
};

const Main: React.FC<Props> = ({ header }) => {
  const [toDos, setToDos] = useState<{ toDo: string; date: string }[]>([]);

  const addTodo = (obj: { toDo: string; date: string }) => {
    setToDos((prevState) => [...prevState, obj]);
  };

  return (
    <StyledContainer>
      <h1>{header}</h1>
      <ToDoInput buttonText="Add TODO" addTodo={addTodo} />
      <ToDoList toDos={toDos} />
    </StyledContainer>
  );
};

export default Main;
