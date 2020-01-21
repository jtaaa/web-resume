import React from 'react';
import Box from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';

import Cognite from './Cognite';
import IBM from './IBM';
import Massy from './Massy';
import Teleios from './Teleios';

const Experience = () => {
  return (
    <Box>
      <Trafalgar>Work Experience</Trafalgar>
      <Cognite />
      <IBM />
      <Massy />
      <Teleios />
    </Box>
  );
};

export default Experience;
