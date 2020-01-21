import styled from 'styled-components/macro';
import Box from 'components/Box';

const DoublePica = styled(Box)``;

DoublePica.defaultProps = {
  fontSize: 3,
  lineHeight: 3,
  fontWeight: 'bold',
};

export default DoublePica;
