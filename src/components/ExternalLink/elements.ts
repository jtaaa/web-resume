import styled from 'styled-components/macro';
import { space, SpaceProps } from 'styled-system';

export type ExternalLinkContainerProps = SpaceProps;
export const ExternalLinkContainer = styled.a<SpaceProps>`
  ${space}

  &, &:visited {
    color: inherit;
  }
`;
