import React from 'react';
import Box from 'components/Box';
import Heading from '../Heading';
import CogniteLogo from './cognite-logo.jpeg';

const Cognite = () => {
  return (
    <Box>
      <Heading
        company="Cognite AS"
        period="Sep-Dec 2019"
        role="Front-end Engineer"
        logoSrc={CogniteLogo}
        logoAlt="Cognite AS logo"
      />
    </Box>
  );
};

export default Cognite;
