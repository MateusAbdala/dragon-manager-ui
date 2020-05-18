import React from 'react';
import { Styled } from './Radio.styles';

export interface Props extends React.HTMLAttributes<HTMLElement> {
    theme?: any,
    disabled?: boolean,
    checked?: boolean,
    name?: string,
    value?: string | number,
    indeterminate?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    children?: React.ReactNode
}

const Radio: React.FC<Props> = ({ value, name, disabled, checked, onChange, ...props }) => (
    <Styled.Container {...props}>
        <Styled.Input
            type='radio'
            value={value}
            name={name}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
        ></Styled.Input>
        <Styled.Radio></Styled.Radio>
        <Styled.Text>{props.children}</Styled.Text>
    </Styled.Container>
);

export default Radio;
