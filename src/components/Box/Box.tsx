import styled from 'styled-components/macro';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  flexbox,
  FlexboxProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  ShadowProps &
  FlexboxProps;
const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
  ${shadow}
  ${flexbox}
`;

export default Box;
