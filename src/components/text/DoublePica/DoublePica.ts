import styled from 'styled-components/macro';
import Box from 'components/Box';

const DoublePica = styled(Box)``;

DoublePica.defaultProps = {
  fontSize: 4,
  lineHeight: 4,
  fontWeight: 'bold',
};

export default DoublePica;
