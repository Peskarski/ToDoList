import React, { useState } from 'react';
import { StyledContainer } from './styles';
import ToDoInput from '../ToDoInput/ToDoInput';

type Props = {
  header: string;
};

const Main: React.FC<Props> = ({ header }) => {
  const [toDos, setToDos] = useState<string[]>([]);

  const addTodo = (toDo: string) => {
    setToDos((prevState) => [...prevState, toDo]);
  };

  return (
    <StyledContainer>
      <h1>{header}</h1>
      <ToDoInput buttonText="Add TODO" addTodo={addTodo} />
    </StyledContainer>
  );
};

export default Main;
