import React from 'react';
import Box from 'components/Box';
import Heading from '../Heading';
import MassyLogo from './massy-logo.png';

const Massy = () => {
  return (
    <Box>
      <Heading
        company="Massy Technologies InfoCom"
        period="May-Aug 2018"
        role="Software Developer and Data Science Assistant"
        logoSrc={MassyLogo}
        logoAlt="Massy Technologies InfoCom logo"
      />
    </Box>
  );
};

export default Massy;
