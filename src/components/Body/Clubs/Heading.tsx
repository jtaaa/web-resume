import React from 'react';
import Box from 'components/Box';
import DoublePica from 'components/text/DoublePica';
import GreatPrimer from 'components/text/GreatPrimer';
import ExternalLink from 'components/ExternalLink';

type HeadingProps = {
  name: string;
  period: string;
  href?: string;
};
const Heading: React.FC<HeadingProps> = ({ name, period, href }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="baseline">
      <DoublePica fontSize={3} pt={1}>
        {href ? <ExternalLink href={href}>{name}</ExternalLink> : name}
      </DoublePica>
      <GreatPrimer fontSize={3}>{period}</GreatPrimer>
    </Box>
  );
};

export default Heading;
