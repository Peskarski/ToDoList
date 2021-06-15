import React, { useState } from 'react';
import { StyledInput, StyledButton } from './styles';

type Props = {
  buttonText: string;
};

const toDoInput: React.FC<Props> = ({ buttonText }) => {
  const [toDo, setToDo] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
    console.log(toDo);
  };

  return (
    <div>
      <StyledInput disableUnderline onChange={handleChange} value={toDo} />
      <StyledButton variant="contained" color="secondary">
        {buttonText}
      </StyledButton>
    </div>
  );
};

export default toDoInput;
