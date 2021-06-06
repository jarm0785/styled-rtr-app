import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';

export const Title = styled.h1<SpaceProps>`
${ space }
font-size: 1.5rem;
color: ${ ({ theme }) => theme.colors.textPrimary };
margin: '1rem 0';
`;

export const Subtitle = styled.h3<SpaceProps>`
  ${ space }
  font-size: 1.2rem;
  color: ${ ({ theme }) => theme.colors.textPrimary };
  margin: '0.5rem 0';
  `;

export const Paragraph = styled.p<SpaceProps>`
  ${ space }
  font-size: 1rem;
  color: ${ (props) => props.theme.colors.textSecondary };
  `;
interface ITypographyProps extends TypographyProps, ColorProps, SpaceProps {
  children: React.ReactNode | string;
}

export const Text = styled.span<ITypographyProps>`
  ${ space }
  ${ typography }
  ${ color }
`;
