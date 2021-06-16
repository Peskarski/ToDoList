import React from 'react';
import { List, ListItem, ListItemSecondaryAction, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ToDo } from '../../index';

interface Props {
  toDos: ToDo[];
  deleteTodo: (id: string) => void;
}

const ToDoList: React.FC<Props> = ({ toDos, deleteTodo }) => {
  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    deleteTodo(e.currentTarget.closest('div').id);
  };

  return (
    <List>
      {toDos.map(({ toDo, date, id }) => (
        <ListItem key={id} divider>
          <ListItemText primary={toDo} secondary={date}></ListItemText>
          <ListItemSecondaryAction id={id}>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDeleteClick}>
              <DeleteIcon color="secondary" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ToDoList;
