import React from 'react';
import Box from 'components/Box';
import ExternalLink from 'components/ExternalLink';
import DoublePica from 'components/text/DoublePica';
import GreatPrimer from 'components/text/GreatPrimer';
import Body from 'components/text/Body';

type HeadingProps = {
  title: string;
  techStack: string;
  year: string;
  href?: string;
};
const Heading: React.FC<HeadingProps> = ({ title, techStack, year, href }) => {
  return (
    <Box
      display="flex"
      alignItems="baseline"
      justifyContent="space-between"
      pt={1}
    >
      <Box display="flex" alignItems="baseline">
        <DoublePica>
          {href ? <ExternalLink href={href}>{title}</ExternalLink> : title}
        </DoublePica>
        <Body ml={2} fontSize={2}>
          {techStack}
        </Body>
      </Box>
      <GreatPrimer>{year}</GreatPrimer>
    </Box>
  );
};

export default Heading;
