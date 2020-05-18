import styled from 'styled-components';
import { Props } from '.';
import { device } from '../../_util/device';
import Themes from '../../themes';

const Input = styled.input`
  touch-action: manipulation;
  margin: .5rem;
  transition: all 0.3s; 
  box-sizing : border-box;
  border-style: solid;
  border-width: 0.0625rem;
  cursor: ${(props: Props) => props.theme.input.cursor};
  &:focus {
    ${(props: Props) => props.theme.input.focusOutline};
  }
  &[disabled], &:disabled {
    cursor: ${(props: Props) => props.theme.input.disabledCursor};
  }

  font-weight: ${(props: Props) => props.theme.input.text.fontWeight};

  // Size
  font-size: ${(props: Props) => props.size && props.theme.input.sizes[props.size].fontSize};
  line-height: ${(props: Props) => props.size && props.theme.input.sizes[props.size].lineHeight};
  padding: ${(props: Props) => props.size && props.theme.input.sizes[props.size].padding};

  //  Shape
  border-radius: ${(props: Props) => props.shape && props.theme.input.shapes[props.shape].borderRadius};
  
  // Variant
  background: ${(props: Props) => props.variant && props.theme.input.types[props.variant].backgroundColor};
  border-color: ${(props: Props) => props.variant && props.theme.input.types[props.variant].borderColor};
  color: ${(props: Props) => props.variant && props.theme.input.types[props.variant].textColor};
  ::placeholder {
    color: ${(props: Props) => props.variant && props.theme.input.types[props.variant].placeholderColor};
  }
  &:focus {
    background: ${(props: Props) => props.variant && props.theme.input.types[props.variant].focus.backgroundColor};
    border-color: ${(props: Props) => props.variant && props.theme.input.types[props.variant].focus.borderColor};
  }
  &:hover {
    background: ${(props: Props) => props.variant && props.theme.input.types[props.variant].hover.backgroundColor};
  }
  &[disabled], &:disabled {
    background: ${(props: Props) => props.variant && props.theme.input.types[props.variant].disabled.backgroundColor};
    border-color: ${(props: Props) => props.variant && props.theme.input.types[props.variant].disabled.borderColor};
    color: ${(props: Props) => props.variant && props.theme.input.types[props.variant].disabled.textColor};
    ::placeholder {
      color: ${(props: Props) => props.variant && props.theme.input.types[props.variant].disabled.placeholderColor};
    }
  }

  /* fullWidth style */
  ${(props: Props) => props.fullWidth && 'margin: .5rem 0;'};
  ${(props: Props) => props.fullWidth && 'width: 100%;'};

  @media ${device.laptop} {
  }
  @media ${device.tablet} {
  }
  @media ${device.mobileL} {
  }
`;

Input.defaultProps = {
  theme: Themes.light
}

export const Styled = {
  Input,
};
