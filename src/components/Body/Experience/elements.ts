import styled from 'styled-components/macro';
import { space, SpaceProps, layout, LayoutProps } from 'styled-system';

export type LogoProps = SpaceProps & LayoutProps;
export const Logo = styled.img<LogoProps>`
  ${space}
  ${layout}

  width: 32px;
`;
