import React from 'react';
import { List, ListItem, ListItemSecondaryAction, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ToDo } from '../../index';

interface Props {
  toDos: ToDo[];
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
}

const ToDoList: React.FC<Props> = ({ toDos, deleteTodo, editTodo }) => {
  const handleEditClick = (toDo: string, id: string) => {
    editTodo(toDo);
    deleteTodo(id);
  };

  return (
    <List>
      {toDos.map(({ toDo, date, id }) => (
        <ListItem key={id} divider>
          <ListItemText primary={toDo} secondary={date}></ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => handleEditClick(toDo, id)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteTodo(id)}>
              <DeleteIcon color="secondary" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ToDoList;
