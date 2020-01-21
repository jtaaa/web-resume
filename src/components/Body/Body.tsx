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
        <Box width={275} ml={3}>
          <Education />
          <Achievements pt={2} />
          <Skillset pt={2} />
          <Clubs pt={2} />
        </Box>
      </Box>
      <Projects pt={3} />
    </Box>
  );
};

export default Body;
