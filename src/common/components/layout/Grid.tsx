import styled from 'styled-components';
import { GridProps, grid } from 'styled-system';

export const Header = styled.header<GridProps>`
  ${ grid }
  background: ${ props => props.theme.colors.primaryBackground };
`;

export const Navbar = styled.nav<GridProps>`
  ${ grid }
  background: ${ props => props.theme.colors.primaryBackground };
`;

export const Main = styled.main<GridProps>`
  ${ grid }
  background: ${ props => props.theme.colors.primaryBackground };
`;

export const Sidebar = styled.aside<GridProps>`
  ${ grid }
  background: ${ props => props.theme.colors.primaryBackground };
`;

export const Footer = styled.aside<GridProps>`
  ${ grid }
  background: ${ props => props.theme.colors.primaryBackground };
`;
