import React from 'react';
import { StyledContainer } from './styles';
import ToDoInput from '../ToDoInput/ToDoInput';

type Props = {
  header: string;
};

const Main: React.FC<Props> = ({ header }) => (
  <StyledContainer>
    <h1>{header}</h1>
    <ToDoInput buttonText="Add TODO" />
  </StyledContainer>
);

export default Main;
