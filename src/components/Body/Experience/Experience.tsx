import React from 'react';
import Box, { BoxProps } from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';

import Cognite from './Cognite';
import IBM from './IBM';
import Massy from './Massy';
import Teleios from './Teleios';

type ExperienceProps = BoxProps;
const Experience: React.FC<ExperienceProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar>Work Experience</Trafalgar>
      <Cognite />
      <IBM />
      <Massy />
      {/* <Teleios /> */}
    </Box>
  );
};

export default Experience;
