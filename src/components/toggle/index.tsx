import React from 'react';
import { Styled } from './Toggle.styles';

export interface Props extends React.HTMLAttributes<HTMLElement> {
    theme?: any,
    disabled?: boolean,
    checked?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    children?: React.ReactNode
}

const Toggle: React.FC<Props> = ({ disabled, checked, onChange, ...props }) => (
    <Styled.Container {...props}>
        <Styled.Input
            type='checkbox'
            disabled={disabled}
            checked={checked}
            onChange={onChange}
        ></Styled.Input>
        <Styled.Toggle></Styled.Toggle>
        <Styled.Text>{props.children}</Styled.Text>
    </Styled.Container>
);

export default Toggle;
