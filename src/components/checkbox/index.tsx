import React from 'react';
import { Styled } from './Checkbox.styles';

export interface Props extends React.HTMLAttributes<HTMLElement> {
    theme?: any,
    disabled?: boolean,
    checked?: boolean,
    indeterminate?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    children?: React.ReactNode
}

const Checkbox: React.FC<Props> = ({ disabled, checked, onChange, ...props }) => (
    <Styled.Container {...props}>
        <Styled.Input
            type='checkbox'
            disabled={disabled}
            checked={checked}
            onChange={onChange}
        ></Styled.Input>
        <Styled.Checkbox></Styled.Checkbox>
        <Styled.Text>{props.children}</Styled.Text>
    </Styled.Container>
);

export default Checkbox;
