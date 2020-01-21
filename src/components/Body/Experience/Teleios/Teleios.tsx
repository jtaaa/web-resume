import React from 'react';
import Box from 'components/Box';
import Heading from '../Heading';
import TeleiosLogo from './teleios-logo.png';

const Teleios = () => {
  return (
    <Box>
      <Heading
        company="Teleios Systems Limited"
        period="June-Aug 2017"
        role="Software Developer"
        logoSrc={TeleiosLogo}
        logoAlt="Teleios Systems Limited logo"
      />
    </Box>
  );
};

export default Teleios;
