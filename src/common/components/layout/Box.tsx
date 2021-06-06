import styled from 'styled-components';
import { compose, space, layout, color, border, grid, LayoutProps,
  position, PositionProps, SpaceProps, ColorProps, BorderProps,
  GridProps, shadow, ShadowProps } from 'styled-system';

export interface IBoxProps extends LayoutProps, PositionProps,
  SpaceProps, ColorProps, BorderProps, GridProps, ShadowProps {
  children: React.ReactNode;
}

const Box = styled.div<IBoxProps>(compose(
  space,
  layout,
  border,
  grid,
  position,
  color,
  shadow,
));

export default Box;
