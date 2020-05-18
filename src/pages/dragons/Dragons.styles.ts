import styled from 'styled-components';
import { Props } from '.';
import Themes from '../../themes';
const Dragons = styled.div`
  z-index: -1;
  background: ${(props: Props) => props.theme.dragons.backgroundColor};
  background: ${(props: Props) => props.theme.dragons.backgroundGradient};
  width: 100%;
  min-height:100vh;
  padding: 20px;
`;

const DragonsHeader = styled.header`
background: url(${(props: Props) => props.theme.logo}) no-repeat; 
min-height: 250px;
`;

const DragonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 1em;
`;

Dragons.defaultProps = {
  theme: Themes.light
}
DragonsHeader.defaultProps = {
  theme: Themes.light
}
DragonsWrapper.defaultProps = {
  theme: Themes.light
}
export const Styled = {
  Dragons,
  DragonsHeader,
  DragonsWrapper
};
