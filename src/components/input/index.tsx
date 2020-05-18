import React from 'react';
import { tuple } from '../../_util/type';
import { Styled } from './Input.styles';

export const InputSizes = tuple('small', 'medium', 'large');
export const InputShapes = tuple('rectangle', 'semiround', 'round');
export const InputVariants = tuple('primary', 'success', 'info', 'warning', 'danger');

export type InputSizeType = typeof InputSizes[number];
export type InputShapeType = typeof InputShapes[number];
export type InputVariantType = typeof InputVariants[number];

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
    theme?: any,
    size?: InputSizeType,
    shape?: InputShapeType,
    variant?: InputVariantType,
    disabled?: boolean,
    fullWidth?: boolean,
    labelText?: string,
    type?: string,
    value?: any,
    name?: string,
}

const Input: React.FC<Props> = (props: any) => (
    <Styled.Input aria-label={props.labelText || props.placeholder} {...props}></Styled.Input>
);

Input.defaultProps = {
    size: 'medium',
    shape: 'rectangle',
    variant: 'primary'
}

export default Input;
