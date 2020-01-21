import React from 'react';
import Box from 'components/Box';
import DoublePica from 'components/text/DoublePica';

import Cognite from './Cognite';
import IBM from './IBM';
import Massy from './Massy';
import Teleios from './Teleios';

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
