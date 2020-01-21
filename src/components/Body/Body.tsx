import React from 'react';
import Box from 'components/Box';

import Experience from './Experience';
import Projects from './Projects';

const Body = () => {
  return (
    <Box>
      <Experience />
      <Projects pt={1} />
    </Box>
  );
};

export default Body;
