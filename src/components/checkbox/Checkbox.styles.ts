import styled from 'styled-components';
import { Props } from '.';
import Themes from '../../themes';

const Input = styled.input`
  box-sizing: border-box;
  padding: 0;
  position: absolute !important;
  opacity: 0;
  height: 1px;
  width: 1px;
`;

const Checkbox = styled.span`
  flex-shrink: 0;
  position: relative;
  cursor: ${(props: Props) => props.theme.checkbox.cursor};
  transition-duration: 0.15s;
  transition-property: background-color,border,box-shadow;
  transition-timing-function: ease-in;
  border-radius: .17rem;
  border: 1px solid;
  width: 1.125rem;
  height: 1.125rem;

  ${Input}:focus + & {
    ${(props: Props) => props.theme.checkbox.focusOutline};
  }

  &:after {
    position: absolute;
    display: table;
    border: 2px solid;
    border-color: ${(props: Props) => props.theme.checkbox.checked.checkmark};
    top: 50%;
    left: 25%;
    width: 0.3rem;
    height: 0.5rem;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(0) translate(-50%, -50%);
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    opacity: 1;
    content: ' ';
  }

  // Unchecked
  background: ${(props: Props) => props.theme.checkbox.backgroundColor};
  border-color: ${(props: Props) => props.theme.checkbox.borderColor};
  ${Input}:focus:not(:checked):not([disabled]) + & {
    background: ${(props: Props) => props.theme.checkbox.focus.backgroundColor};
    border-color: ${(props: Props) => props.theme.checkbox.focus.borderColor};
  }
  ${Input}:not(:checked):not([disabled]) + &:hover {
    background: ${(props: Props) => props.theme.checkbox.hover.backgroundColor};
    border-color: ${(props: Props) => props.theme.checkbox.hover.borderColor};
  }  

  // Checked
  ${Input}:checked + & {
    background: ${(props: Props) => props.theme.checkbox.checked.backgroundColor};
    border-color: ${(props: Props) => props.theme.checkbox.checked.borderColor};
      &:after {
        transform: rotate(45deg) scale(1) translate(-50%, -50%);
    }
  }
  ${Input}:focus:checked + & {
    background: ${(props: Props) => props.theme.checkbox.checked.focus.backgroundColor};
    border-color: ${(props: Props) => props.theme.checkbox.checked.focus.borderColor};
  }
  ${Input}:checked + &:hover {
    background: ${(props: Props) => props.theme.checkbox.checked.hover.backgroundColor};
    border-color: ${(props: Props) => props.theme.checkbox.checked.hover.borderColor};
  }

  // Disabled
  ${Input}[disabled] + & {
    cursor: ${(props: Props) => props.theme.checkbox.disabledCursor};
    background: ${(props: Props) => props.theme.checkbox.disabled.backgroundColor};
    border-color: ${(props: Props) => props.theme.checkbox.disabled.borderColor};
  }
  ${Input}[disabled]:checked + & {
    background: ${(props: Props) => props.theme.checkbox.disabled.checked.backgroundColor};
    border-color: ${(props: Props) => props.theme.checkbox.disabled.checked.borderColor};
  }
  ${Input}[disabled]:checked + &:after {
    border-color: ${(props: Props) => props.theme.checkbox.disabled.checked.checkmark};
  }
`;

const Text = styled.span`
  padding-left: .6875rem;
  transition: color 0.15s ease-in;
  color: ${(props: Props) => props.theme.checkbox.textColor};
  ${Input}[disabled] ~ & {
    color: ${(props: Props) => props.theme.checkbox.disabled.textColor};
  }
  font-size: .8125rem;
  font-weight: 600;
  line-height: 1.5rem;
`;

const Container = styled.label`
  display: inline-flex;
  align-items: center;
  min-height: inherit;
  padding: 0.375rem 1.5rem 0.375rem 0;
`;

Checkbox.defaultProps = {
  theme: Themes.light
}
Text.defaultProps = {
  theme: Themes.light
}

export const Styled = {
  Input,
  Checkbox,
  Text,
  Container
};
