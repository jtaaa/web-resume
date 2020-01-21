import React from 'react';
import Box from 'components/Box';

import Achievements from './Achievements';
import Skillset from './Skillset';

const Footer = () => {
  return (
    <Box>
      <Box display="flex">
        <Achievements flex={1} />
        <Skillset flex={1} ml={3} />
      </Box>
    </Box>
  );
};

export default Footer;
