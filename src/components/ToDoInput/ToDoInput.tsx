import React, { useState } from 'react';
import { StyledInput, StyledButton } from './styles';

type Props = {
  buttonText: string;
  addTodo: ({}) => void;
};

const toDoInput: React.FC<Props> = ({ buttonText, addTodo }) => {
  const getDate = (): string => new Date().toLocaleString('ru');

  const [toDo, setToDo] = useState<string>('');
  const [date, setDate] = useState<string>(getDate());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
  };

  const handleClick = (): void => {
    addTodo({ toDo, date });
    setToDo('');
    setDate(getDate());
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
