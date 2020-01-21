import React from 'react';
import Box, { BoxProps } from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';
import Body from 'components/text/Body';
import Highlight from 'components/text/Highlight';

type EducationProps = BoxProps;
const Education: React.FC<EducationProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar>Education</Trafalgar>
      <Box>
        <Body>Honours Computer Science Co-op</Body>
        <Body fontSize={0}>University of Waterloo, expected Winter 2021</Body>
        <Body
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Highlight>Cumulative Average:</Highlight>
          85.55%
        </Body>
        <Body
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Highlight>Faculty Average:</Highlight>
          85.55%
        </Body>
      </Box>
    </Box>
  );
};

export default Education;
