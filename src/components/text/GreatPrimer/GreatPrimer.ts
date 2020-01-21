import styled from 'styled-components/macro';
import Box from 'components/Box';

const GreatPrimer = styled(Box)`
  text-transform: uppercase;
`;

GreatPrimer.defaultProps = {
  fontSize: 2,
  lineHeight: 2,
  letterSpacing: '1px',
};

export default GreatPrimer;
