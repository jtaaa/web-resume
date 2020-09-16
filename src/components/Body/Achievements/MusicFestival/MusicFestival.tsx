import React from 'react';
import Box from 'components/Box';
import Heading from '../Heading';
import ExternalLink from 'components/ExternalLink';

const MusicFestival = () => {
  return (
    <Box>
      <Heading
        title={
          <>
            <ExternalLink href="http://ttmusicfestival.org">
              Music Festival
            </ExternalLink>{' '}
            Band Winner
          </>
        }
        year="2012-16"
      />
    </Box>
  );
};

export default MusicFestival;
