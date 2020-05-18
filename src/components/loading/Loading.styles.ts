import styled, { keyframes } from 'styled-components';
import { Props } from '.';
import Themes from '../../themes';

const animate = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px; 
  left: calc(50% - 40px);
  display: block;
  margin-bottom: -80px;

  & div {
    position: absolute;
    border: 4px solid ${(props: Props) => props.theme.loading.color};
    opacity: 1;
    border-radius: 50%;
    animation: ${animate} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  & div:nth-child(2) {
    animation-delay: -0.5s;
  }

`;

Loading.defaultProps = {
  theme: Themes.light
}

export const Styled = {
  Loading
};
