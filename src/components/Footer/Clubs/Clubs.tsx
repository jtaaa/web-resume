import React from 'react';
import Box, { BoxProps } from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';
import Heading from './Heading';

type ClubsProps = BoxProps;
const Clubs: React.FC<ClubsProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar>Clubs</Trafalgar>
      <Box>
        <Heading name="Association of Caribbean Students" period="2017-2020" />
      </Box>
    </Box>
  );
};

export default Clubs;
