import React from 'react';
import { List, ListItem } from '@material-ui/core';

type Props = {
  toDos: { toDo: string; date: string }[];
};

const ToDoList: React.FC<Props> = ({ toDos }) => {
  return (
    <List>
      {toDos.map((item) => (
        <ListItem key={Math.random()}>
          {item.toDo}
          {item.date}
        </ListItem>
      ))}
    </List>
  );
};

export default ToDoList;
