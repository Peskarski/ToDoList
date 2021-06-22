import React, { useState } from 'react';
import { StyledInput, StyledButton } from './styles';

type Props = {
  editText: string;
  id: string;
  editTodo: (toDo: string, id: string) => void;
  clearEditedId: () => void;
};

const EDIT_BUTTON_TEXT = 'Edit';
const CANCEL_BUTTON_TEXT = 'Cancel';

export const EditToDoInput: React.FC<Props> = ({ editText, id, editTodo, clearEditedId }) => {
  const [editedToDo, setEditedToDo] = useState<string>(editText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedToDo(e.target.value);
  };

  const handleEditClick = () => {
    editTodo(editedToDo, id);
    clearEditedId();
  };

  return (
    <div>
      <StyledInput disableUnderline placeholder={editText} onChange={handleChange} value={editedToDo} />
      <StyledButton variant="contained" onClick={handleEditClick}>
        {EDIT_BUTTON_TEXT}
      </StyledButton>
      <StyledButton variant="contained" color="primary" onClick={clearEditedId}>
        {CANCEL_BUTTON_TEXT}
      </StyledButton>
    </div>
  );
};
