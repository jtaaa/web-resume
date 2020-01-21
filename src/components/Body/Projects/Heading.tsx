import React from 'react';
import Box from 'components/Box';
import DoublePica from 'components/text/DoublePica';
import GreatPrimer from 'components/text/GreatPrimer';
import Body from 'components/text/Body';

type HeadingProps = {
  title: string;
  techStack: string;
  year: string;
};
const Heading = ({ title, techStack, year }: HeadingProps) => {
  return (
    <Box display="flex" alignItems="baseline" justifyContent="space-between">
      <Box display="flex" alignItems="baseline">
        <DoublePica>{title}</DoublePica>
        <Body ml={2} fontSize={0}>
          {techStack}
        </Body>
      </Box>
      <GreatPrimer>{year}</GreatPrimer>
    </Box>
  );
};

export default Heading;
