import React from 'react';
import { StyledContainer } from './styles';
import { ToDoInput } from '../ToDoInput';
import { ToDoList } from '../ToDoList';
import { sortToDos } from './utils';
import { getDate } from '../ToDoInput/utils';
import { usePersistedState } from '../../hooks/usePersistedState';

type Props = {
  header: string;
};

export type ToDo = {
  toDo: string;
  date: string;
  id: string;
};

const KEY_FOR_TODOS = 'toDos';

export const Main: React.FC<Props> = ({ header }) => {
  const [toDos, setToDos] = usePersistedState(KEY_FOR_TODOS, []);

  const addTodo = (toDo: ToDo) => {
    setToDos((prevState: ToDo[]) => [...prevState, toDo]);
  };

  const deleteTodo = (id: string) => {
    setToDos((prevState: ToDo[]) => prevState.filter((item) => item.id !== id));
  };

  const editTodo = (toDo: string, id: string) => {
    const editedToDo: ToDo = {
      toDo,
      date: getDate(),
      id,
    };

    const newToDos: ToDo[] = [...toDos.filter((item: ToDo) => item.id !== id), editedToDo];

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
