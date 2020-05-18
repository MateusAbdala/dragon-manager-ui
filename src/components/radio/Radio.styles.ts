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

const Radio = styled.span`
  flex-shrink: 0;
  position: relative;
  cursor: ${(props: Props) => props.theme.radio.cursor};
  transition-duration: 0.15s;
  transition-property: all;
  transition-timing-function: ease-in;
  border-radius:  1.125rem;
  border: 1px solid;
  width: 1.125rem;
  height: 1.125rem;

  ${Input}:focus + & {
    ${(props: Props) => props.theme.radio.focusOutline};
  }

  &:after {
    position: absolute; 
    background-color: ${(props: Props) => props.theme.radio.checked.checkmark};
    top: 50%;
    width: 1rem;
    height: 1rem;
    border-radius: 1.125rem;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    transform: translateY(-50%);
    opacity: 0;
    content: ' ';
  }

  // Unchecked
  background: ${(props: Props) => props.theme.radio.backgroundColor};
  border-color: ${(props: Props) => props.theme.radio.borderColor};
  ${Input}:focus:not(:checked):not([disabled]) + & {
    background: ${(props: Props) => props.theme.radio.focus.backgroundColor};
    border-color: ${(props: Props) => props.theme.radio.focus.borderColor};
  }
  ${Input}:not(:checked):not([disabled]) + &:hover {
    background: ${(props: Props) => props.theme.radio.hover.backgroundColor};
    border-color: ${(props: Props) => props.theme.radio.hover.borderColor};
  }  

  // Checked
  ${Input}:checked + & {
    background: ${(props: Props) => props.theme.radio.checked.backgroundColor};
    border-color: ${(props: Props) => props.theme.radio.checked.borderColor};
    &:after {
      transform: translateY(-50%) scale(0.65);
      opacity: 1;
    }
  }
  ${Input}:focus:checked + & {
    background: ${(props: Props) => props.theme.radio.checked.focus.backgroundColor};
    border-color: ${(props: Props) => props.theme.radio.checked.focus.borderColor};
  }
  ${Input}:checked + &:hover {
    background: ${(props: Props) => props.theme.radio.checked.hover.backgroundColor};
    border-color: ${(props: Props) => props.theme.radio.checked.hover.borderColor};
  }

  // Disabled
  ${Input}[disabled] + & {
    cursor: ${(props: Props) => props.theme.radio.disabledCursor};
    background: ${(props: Props) => props.theme.radio.disabled.backgroundColor};
    border-color: ${(props: Props) => props.theme.radio.disabled.borderColor};
  }
  ${Input}[disabled]:checked + & {
    background: ${(props: Props) => props.theme.radio.disabled.checked.backgroundColor};
    border-color: ${(props: Props) => props.theme.radio.disabled.checked.borderColor};
    &:after {
      background-color: ${(props: Props) => props.theme.radio.disabled.checked.checkmark};
    }
  }
`;

const Text = styled.span`
  padding-left: .6875rem;
  transition: color 0.15s ease-in;
  color: ${(props: Props) => props.theme.radio.textColor};
  ${Input}[disabled] ~ & {
    color: ${(props: Props) => props.theme.radio.disabled.textColor};
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

Radio.defaultProps = {
  theme: Themes.light
}
Text.defaultProps = {
  theme: Themes.light
}

export const Styled = {
  Input,
  Radio,
  Text,
  Container
};
