import React from 'react';
import Box from 'components/Box';
import DoublePica from 'components/text/DoublePica';
import GreatPrimer from 'components/text/GreatPrimer';

type HeadingProps = {
  name: string;
  period: string;
};
const Heading: React.FC<HeadingProps> = ({ name, period }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="baseline">
      <DoublePica fontSize={2}>{name}</DoublePica>
      <GreatPrimer fontSize={1}>{period}</GreatPrimer>
    </Box>
  );
};

export default Heading;
