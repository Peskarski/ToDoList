import React from 'react';
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

type Props = {
  toDos: { toDo: string; date: string }[];
};

const ToDoList: React.FC<Props> = ({ toDos }) => {
  return (
    <List>
      {toDos.map((item) => (
        <ListItem key={Math.random()} divider>
          <ListItemText
            primary={item.toDo}
            secondary={item.date}
          ></ListItemText>
          <ListItemSecondaryAction>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon color="secondary" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ToDoList;
