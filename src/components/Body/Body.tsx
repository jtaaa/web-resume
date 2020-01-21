import React from 'react';
import Box from 'components/Box';

import Experience from './Experience';
import Projects from './Projects';
import Achievements from 'components/Body/Achievements';
import Education from 'components/Body/Education';
import Skillset from 'components/Body/Skillset';
import Clubs from 'components/Body/Clubs';

const Body = () => {
  return (
    <Box>
      <Box display="flex">
        <Experience flex={1} />
        <Box width={210} ml={2}>
          <Education />
          <Achievements />
          <Skillset />
          <Clubs />
        </Box>
      </Box>
      <Projects pt={1} />
    </Box>
  );
};

export default Body;
