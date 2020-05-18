import styled from 'styled-components';
import { Props } from '.';
import { device } from '../../_util/device';
import Themes from '../../themes';

const Button = styled.button`
  touch-action: manipulation;
  text-decoration: none;
  margin: .5rem;
  transition: all 0.3s;
  cursor: ${(props: Props) => props.theme.button.cursor};
  &:focus {
    ${(props: Props) => props.theme.button.focusOutline};
  }
  &[disabled], &:disabled {
    cursor: ${(props: Props) => props.theme.button.disabledCursor};
  } 

  font-weight: ${(props: Props) => props.theme.button.text.fontWeight};

  // Size
  font-size: ${(props: Props) => props.size && props.theme.button.sizes[props.size].fontSize};
  line-height: ${(props: Props) => props.size && props.theme.button.sizes[props.size].lineHeight};
  padding: ${(props: Props) => props.size && props.theme.button.sizes[props.size].padding};

  //  Shape
  border-radius: ${(props: Props) => props.shape && props.theme.button.shapes[props.shape].borderRadius};

  // Appereance
  border-style: ${(props: Props) => props.appereance && props.theme.button.types[props.appereance].border.style};
  border-width: ${(props: Props) => props.appereance && props.theme.button.types[props.appereance].border.width};

  // Variant
  background: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].backgroundColor};
  border-color: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].borderColor};
  color: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].textColor};
  &:focus {
    background: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].focus.backgroundColor};
    border-color: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].focus.borderColor};
    color: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].focus.textColor};
  }
  &:hover {
    background: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].hover.backgroundColor};
    border-color: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].hover.borderColor};
    color: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].hover.textColor};
  }
  &:active {
    background: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].active.backgroundColor};
    border-color: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].active.borderColor};
    color: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].active.textColor};
  }
  &[disabled], &:disabled {
    background: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].disabled.backgroundColor};
    border-color: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].disabled.borderColor};
    color: ${(props: Props) => props.appereance && props.variant && props.theme.button.types[props.appereance][props.variant].disabled.textColor};
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

Button.defaultProps = {
  theme: Themes.light
}

export const Styled = {
  Button,
};
