import React from 'react';
import Box, { BoxProps } from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';
import Body from 'components/text/Body';
import Highlight from 'components/text/Highlight';
import DoublePica from 'components/text/DoublePica';

type EducationProps = BoxProps;
const Education: React.FC<EducationProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar>Education</Trafalgar>
      <Box>
        <DoublePica pt={1}>Honours Computer Science Co-op</DoublePica>
        <Body fontSize={2}>University of Waterloo, expected August 2021</Body>
        <Body
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Highlight>Cumulative Average:</Highlight>
          85.63%
        </Body>
        <Body
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Highlight>Faculty Average:</Highlight>
          87.27%
        </Body>
      </Box>
    </Box>
  );
};

export default Education;
