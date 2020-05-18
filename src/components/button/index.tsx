import React from 'react';
import { tuple } from '../../_util/type';
import { Styled } from './Button.styles';

export const ButtonSizes = tuple('small', 'medium', 'large');
export const ButtonShapes = tuple('rectangle', 'semiround', 'round');
export const ButtonAppereances = tuple('filled', 'outline', 'ghost');
export const ButtonVariants = tuple('primary', 'success', 'info', 'warning', 'danger');

export type ButtonSizeType = typeof ButtonSizes[number];
export type ButtonShapeType = typeof ButtonShapes[number];
export type ButtonAppereanceType = typeof ButtonAppereances[number];
export type ButtonVariantType = typeof ButtonVariants[number];

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    theme?: any,
    size?: ButtonSizeType,
    shape?: ButtonShapeType,
    appereance?: ButtonAppereanceType,
    variant?: ButtonVariantType,
    disabled?: boolean,
    fullWidth?: boolean,
    // onClick?: () => void,
    children?: React.ReactNode
}

const Button: React.FC<Props> = (props) => (
    <Styled.Button {...props} >
        {props.children}
    </Styled.Button>
);

Button.defaultProps = {
    size: 'medium',
    shape: 'rectangle',
    appereance: 'filled',
    variant: 'primary'
}

export default Button;
