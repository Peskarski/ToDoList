import React, { useState, useEffect } from 'react';
import { StyledInput, StyledButton } from './styles';
import { getDate } from './utils';
import { DEFAULT_INPUT_VALUE } from '../Main/Main';

interface Props {
  buttonText: string;
  addTodo: ({}) => void;
  editedToDo: string;
}

const toDoInput: React.FC<Props> = ({ buttonText, addTodo, editedToDo }) => {
  const [toDo, setToDo] = useState<string>(editedToDo);

  useEffect(() => {
    setToDo(editedToDo);
  }, [editedToDo]);

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
      <StyledInput disableUnderline onChange={handleChange} value={toDo} />
      <StyledButton variant="contained" color="secondary" onClick={handleClick}>
        {buttonText}
      </StyledButton>
    </div>
  );
};

export default toDoInput;