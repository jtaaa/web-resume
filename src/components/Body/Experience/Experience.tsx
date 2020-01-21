import React from 'react';
import Box from 'components/Box';
import DoublePica from 'components/text/DoublePica';

import Cognite from './sections/Cognite';
import IBM from './sections/IBM';
import Massy from './sections/Massy';
import Teleios from './sections/Teleios';

const Experience = () => {
  return (
    <Box>
      <DoublePica>Work Experience</DoublePica>
      <Cognite />
      <IBM />
      <Massy />
      <Teleios />
    </Box>
  );
};

export default Experience;
