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

const Toggle = styled.span`
  flex-shrink: 0;
  position: relative;
  cursor: ${(props: Props) => props.theme.toggle.cursor};
  transition-duration: 0.15s;
  transition-property: background-color,border,box-shadow;
  transition-timing-function: ease-in;
  border-radius: 1.125rem;
  border: 1px solid;
  width: 2rem;
  height: 1.125rem;
  padding: 2px;

  ${Input}:focus + & {
    ${(props: Props) => props.theme.toggle.focusOutline};
  }

  &:after {
    left: 0;
    position: relative;
    display: block;
    width: 50%;
    height: 100%;
    opacity: 1;
    content: ' ';
    border-radius: 2rem;
    background: ${(props: Props) => props.theme.toggle.checked.checkmark};
    transition: left .3s cubic-bezier(0.175, 0.885, 0.320, 1.275 ), padding .3s ease, margin .3s ease;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 3px 0 rgba(0,0,0,.08);
  }
  
  // Unchecked
  background: ${(props: Props) => props.theme.toggle.backgroundColor};
  border-color: ${(props: Props) => props.theme.toggle.borderColor};
  ${Input}:focus:not(:checked):not([disabled]) + & {
    background: ${(props: Props) => props.theme.toggle.focus.backgroundColor};
    border-color: ${(props: Props) => props.theme.toggle.focus.borderColor};
  }
  ${Input}:not(:checked):not([disabled]) + &:hover {
    background: ${(props: Props) => props.theme.toggle.hover.backgroundColor};
    border-color: ${(props: Props) => props.theme.toggle.hover.borderColor};
  }  

  // Checked
  ${Input}:checked + & {
    background: ${(props: Props) => props.theme.toggle.checked.backgroundColor};
    border-color: ${(props: Props) => props.theme.toggle.checked.borderColor};
      &:after {
        left: 50%;
    }
  }
  ${Input}:focus:checked + & {
    background: ${(props: Props) => props.theme.toggle.checked.focus.backgroundColor};
    border-color: ${(props: Props) => props.theme.toggle.checked.focus.borderColor};
  }
  ${Input}:checked + &:hover {
    background: ${(props: Props) => props.theme.toggle.checked.hover.backgroundColor};
    border-color: ${(props: Props) => props.theme.toggle.checked.hover.borderColor};
  }

  ${Input}:active + &:after {
    padding-right: .3rem;
  }
  ${Input}:checked:active + &:after {
    margin-left: -.3rem;
  } 

  // Disabled
  ${Input}[disabled] + & {
    cursor: ${(props: Props) => props.theme.toggle.disabledCursor};
    background: ${(props: Props) => props.theme.toggle.disabled.backgroundColor};
    border-color: ${(props: Props) => props.theme.toggle.disabled.borderColor};
  }
  ${Input}[disabled]:checked + & {
    background: ${(props: Props) => props.theme.toggle.disabled.checked.backgroundColor};
    border-color: ${(props: Props) => props.theme.toggle.disabled.checked.borderColor};
  }
`;

const Text = styled.span`
  padding-left: .6875rem;
  transition: color 0.15s ease-in;
  color: ${(props: Props) => props.theme.toggle.textColor};
  ${Input}[disabled] ~ & {
    color: ${(props: Props) => props.theme.toggle.disabled.textColor};
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

Toggle.defaultProps = {
  theme: Themes.light
}

export const Styled = {
  Input,
  Toggle,
  Text,
  Container
};
