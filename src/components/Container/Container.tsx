import React from 'react';
import { Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledContainer = styled(Container)({
    background: 'rgb(132, 217, 232)',
    textAlign: 'center'
})

type Props = {
    header: string
}

const Main: React.FC<Props> = ({header}) => (
    <StyledContainer>
        <h1>{header}</h1>
    </StyledContainer>
)

export default Main;