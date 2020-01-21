import React from 'react';
import Box, { BoxProps } from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';

type EducationProps = BoxProps;
const Education: React.FC<EducationProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar>Education</Trafalgar>
    </Box>
  );
};

export default Education;
