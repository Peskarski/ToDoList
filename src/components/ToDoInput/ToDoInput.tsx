import React, { useState } from 'react';
import { StyledInput, StyledButton } from './styles';

type Props = {
  buttonText: string;
  addTodo: (toDo: string) => void;
};

const toDoInput: React.FC<Props> = ({ buttonText, addTodo }) => {
  const [toDo, setToDo] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
  };

  const handleClick = () => {
    addTodo(toDo);
    setToDo('');
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
