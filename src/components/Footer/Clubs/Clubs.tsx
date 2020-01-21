import React from 'react';
import Box, { BoxProps } from 'components/Box';
import ExternalLink from 'components/ExternalLink';
import Trafalgar from 'components/text/Trafalgar';
import Body from 'components/text/Body';
import Heading from './Heading';

type ClubsProps = BoxProps;
const Clubs: React.FC<ClubsProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar>Clubs</Trafalgar>
      <Box>
        <Heading name="Association of Caribbean Students" period="2017-2020" />
        <Body>
          Web admin for past 4 years. Created{' '}
          <ExternalLink href="http://uwacs.club/">club website</ExternalLink>.
        </Body>
      </Box>
    </Box>
  );
};

export default Clubs;
