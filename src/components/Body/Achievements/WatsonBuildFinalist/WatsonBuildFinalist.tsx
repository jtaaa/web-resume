import React from 'react';
import Box from 'components/Box';
import ExternalLink from 'components/ExternalLink';
import Heading from '../Heading';

const WatsonBuildFinalist = () => {
  return (
    <Box>
      <Heading
        title={
          <>
            <ExternalLink href="https://www-356.ibm.com/partnerworld/wps/servlet/ContentHandler/watson-build">
              Watson Build
            </ExternalLink>{' '}
            Finalist
          </>
        }
        year="2018"
      />
    </Box>
  );
};

export default WatsonBuildFinalist;
