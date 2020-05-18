import React from 'react';
import { Styled } from './Loading.styles';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    theme?: any
}

const Loading: React.FC<Props> = () => (
    <Styled.Loading>
        <div></div>
        <div></div>
    </Styled.Loading>
);

export default Loading;
