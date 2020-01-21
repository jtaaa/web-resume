import React from 'react';
import Box, { BoxProps } from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';
import DoublePica from 'components/text/DoublePica';

type SkillsetProps = BoxProps;
const Skillset: React.FC<SkillsetProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar>Skillset</Trafalgar>
      <Box>
        <DoublePica>3+ years experience and shipped product(s)</DoublePica>
      </Box>
    </Box>
  );
};

export default Skillset;
