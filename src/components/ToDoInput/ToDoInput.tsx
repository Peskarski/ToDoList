import React, { useState } from 'react';
import { StyledInput, StyledButton } from './styles';
import { getDate } from './utils';

interface Props {
  buttonText: string;
  addTodo: ({}) => void;
}

const DEFAULT_INPUT_VALUE = '';

const toDoInput: React.FC<Props> = ({ buttonText, addTodo }) => {
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
      <StyledInput disableUnderline onChange={handleChange} value={toDo} />
      <StyledButton variant="contained" color="secondary" onClick={handleClick}>
        {buttonText}
      </StyledButton>
    </div>
  );
};

export default toDoInput;
