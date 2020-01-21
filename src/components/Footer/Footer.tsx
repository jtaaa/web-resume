import React from 'react';
import Box from 'components/Box';

import Achievements from './Achievements';
import Skillset from './Skillset';
import Education from './Education';
import Clubs from './Clubs';

const Footer = () => {
  return (
    <Box>
      <Box display="flex">
        <Achievements flex={1} />
        <Skillset flex={1} ml={3} />
      </Box>
      <Box display="flex">
        <Clubs flex={1} />
        <Education flex={1} ml={3} />
      </Box>
    </Box>
  );
};

export default Footer;
