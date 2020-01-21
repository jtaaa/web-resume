import styled from 'styled-components/macro';
import Box from 'components/Box';

export const HeaderContainer = styled(Box)``;
HeaderContainer.defaultProps = {
  pb: 4,
};

export const LinksGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
`;
LinksGrid.defaultProps = {
  ml: 4,
};
