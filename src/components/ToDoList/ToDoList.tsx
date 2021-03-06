import React, { useState } from 'react';
import { List, ListItem, ListItemSecondaryAction, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ToDo } from '../Main';
import { EditToDoInput } from './EditToDoInput';

interface Props {
  toDos: ToDo[];
  deleteTodo: (id: string) => void;
  editTodo: (toDo: string, id: string) => void;
}

const DEFAULT_EDITED_ID = '';

export const ToDoList: React.FC<Props> = ({ toDos, deleteTodo, editTodo }) => {
  const [editedId, setEditedId] = useState<string>(DEFAULT_EDITED_ID);

  const clearEditedId = (): void => {
    setEditedId(DEFAULT_EDITED_ID);
  };

  return (
    <List>
      {toDos.map(({ toDo, date, id }) => (
        <div key={id}>
          <ListItem divider>
            <ListItemText primary={toDo} secondary={date} data-testid></ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={() => setEditedId(id)} aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => deleteTodo(id)} aria-label="delete">
                <DeleteIcon color="secondary" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          {id === editedId && (
            <EditToDoInput editText={toDo} editTodo={editTodo} id={id} clearEditedId={clearEditedId} />
          )}
        </div>
      ))}
    </List>
  );
};
