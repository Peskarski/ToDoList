import React, { useState } from 'react';
import { StyledInput, StyledButton } from './styles';
import { getDate } from './utils';
import { ToDo } from '../Main';

interface Props {
  buttonText: string;
  addTodo: (ToDo: ToDo) => void;
}

export const DEFAULT_INPUT_VALUE = '';

export const ToDoInput: React.FC<Props> = ({ buttonText, addTodo }) => {
  const [toDo, setToDo] = useState<string>(DEFAULT_INPUT_VALUE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
  };

  const handleClick = (): void => {
    const date = getDate();
    const id = String(Math.random());
    addTodo({ toDo, date, id });
    setToDo(DEFAULT_INPUT_VALUE);
  };

  return (
    <div>
      <StyledInput disableUnderline onChange={handleChange} value={toDo} data-testid="input" />
      <StyledButton variant="contained" color="secondary" onClick={handleClick} data-testid="add">
        {buttonText}
      </StyledButton>
    </div>
  );
};
