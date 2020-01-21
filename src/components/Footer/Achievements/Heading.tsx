import React from 'react';
import Box from 'components/Box';
import GreatPrimer from 'components/text/GreatPrimer';
import DoublePica from 'components/text/DoublePica';

type HeadingProps = {
  title: string;
  year: string;
};
const Heading: React.FC<HeadingProps> = ({ title, year }) => {
  return (
    <Box display="flex" alignItems="baseline" justifyContent="space-between">
      <DoublePica>{title}</DoublePica>
      <GreatPrimer>{year}</GreatPrimer>
    </Box>
  );
};

export default Heading;