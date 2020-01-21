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
      <Trafalgar pt={1}>Clubs</Trafalgar>
      <Box>
        <Heading
          name="Assoc. of Caribbean Students"
          period="2017-20"
          href="http://uwacs.club/"
        />
        <Body fontSize={0}>
          Web admin for 4 years. Created{' '}
          <ExternalLink href="http://uwacs.club/">club website</ExternalLink>.
        </Body>
        <Heading
          name="UW Blueprint"
          period="2018-20"
          href="https://www.uwblueprint.org/"
        />
        <Body fontSize={0}>
          Collaborated with other students to develop software solutions for
          NPOs.
        </Body>
      </Box>
    </Box>
  );
};

export default Clubs;
