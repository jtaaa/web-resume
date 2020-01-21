import React from 'react';
import Box from 'components/Box';
import Heading from '../Heading';
import IBMLogo from './ibm-logo.svg';

const IBM = () => {
  return (
    <Box>
      <Heading
        company="IBM Canada Toronto Labs"
        period="Jan-May 2019"
        role="Cloud Platform Project Developer"
        logoSrc={IBMLogo}
        logoAlt="IBM logo"
      />
    </Box>
  );
};

export default IBM;
