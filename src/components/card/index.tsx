import React from 'react';
import { tuple } from '../../_util/type';
import { Styled } from './Card.styles';

export const CardAccents = tuple('primary', 'success', 'info', 'warning', 'danger');

export type CardAccentType = typeof CardAccents[number];

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    theme?: any,
    accent?: CardAccentType,
    children?: React.ReactNode
}

export const CardHeader: React.FC<Props> = (props) => (
    <Styled.Header {...props} >
        {props.children}
    </Styled.Header>
);

export const CardBody: React.FC<Props> = (props) => (
    <Styled.Body {...props} >
        {props.children}
    </Styled.Body>
);

export const CardFooter: React.FC<Props> = (props) => (
    <Styled.Footer {...props} >
        {props.children}
    </Styled.Footer>
);

const Card: React.FC<Props> = (props) => (
    <Styled.Card {...props} >
        {props.children}
    </Styled.Card>
);

export default Card;
