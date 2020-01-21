import React from 'react';
import Box from 'components/Box';
import DoublePica from 'components/text/DoublePica';
import Body from 'components/text/Body';
import GreatPrimer from 'components/text/GreatPrimer';
import { Logo } from './elements';

type HeadingProps = {
  company: string;
  period: string;
  role: string;
  logoSrc: string;
  logoAlt: string;
};
const Heading = ({ company, period, role, logoSrc, logoAlt }: HeadingProps) => {
  return (
    <Box display="flex" alignItems="center">
      <Box flex={1}>
        <Box display="flex" alignItems="baseline">
          <DoublePica>{company}</DoublePica>
          <Body>{period}</Body>
        </Box>
        <GreatPrimer>{role}</GreatPrimer>
      </Box>
      <Logo src={logoSrc} alt={logoAlt} />
    </Box>
  );
};

export default Heading;
