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
const Heading: React.FC<HeadingProps> = ({
  company,
  period,
  role,
  logoSrc,
  logoAlt,
}) => {
  return (
    <Box display="flex" alignItems="center" pt={1}>
      <Logo src={logoSrc} alt={logoAlt} />
      <Box flex={1} ml={2}>
        <Box display="flex" alignItems="baseline">
          <DoublePica>{company}</DoublePica>
          <Body ml={2} fontSize={0}>
            {period}
          </Body>
        </Box>
        <GreatPrimer>{role}</GreatPrimer>
      </Box>
    </Box>
  );
};

export default Heading;
