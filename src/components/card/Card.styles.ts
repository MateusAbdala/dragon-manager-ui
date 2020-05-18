import styled from 'styled-components';
import { Props } from '.';
import Themes from '../../themes';

const Card = styled.div`
  font-size: 0.9375rem;
  background: ${(props: Props) => props.theme.card.backgroundColor};
  color: ${(props: Props) => props.theme.card.textColor};
  border-color: ${(props: Props) => props.theme.card.borderColor};
  border-width:	0.0625rem;
  border-style: solid;
  border-radius: 0.25rem;
  height: fit-content;

  // accent
  border-top: ${(props: Props) => props.accent && 'solid 0.25rem;'};
  border-top-color: ${(props: Props) => props.accent && props.theme.card.accent[props.accent]};
`;

const Header = styled.div`
  font-weight:	600;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${(props: Props) => props.theme.card.stripeColor};
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const Body = styled.div`
  padding: 1rem 1.5rem;
`;

const Footer = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid ${(props: Props) => props.theme.card.stripeColor};
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`;

Card.defaultProps = {
  theme: Themes.light
}
Header.defaultProps = {
  theme: Themes.light
}
Body.defaultProps = {
  theme: Themes.light
}
Footer.defaultProps = {
  theme: Themes.light
}

export const Styled = {
  Card, Header, Body, Footer
};
