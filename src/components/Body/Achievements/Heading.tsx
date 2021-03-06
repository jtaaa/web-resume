import React from 'react';
import Box from 'components/Box';
import GreatPrimer from 'components/text/GreatPrimer';
import DoublePica from 'components/text/DoublePica';

type HeadingProps = {
  title: React.ReactNode;
  year: string;
};
const Heading: React.FC<HeadingProps> = ({ title, year }) => {
  return (
    <Box display="flex" alignItems="baseline" justifyContent="space-between">
      <DoublePica fontSize={3}>{title}</DoublePica>
      <GreatPrimer fontSize={3}>{year}</GreatPrimer>
    </Box>
  );
};

export default Heading;
