import styled from 'styled-components/macro';
import Box from 'components/Box';

const GreatPrimer = styled(Box)`
  text-transform: uppercase;
`;

GreatPrimer.defaultProps = {
  fontSize: 3,
  lineHeight: 3,
  letterSpacing: '1px',
};

export default GreatPrimer;
