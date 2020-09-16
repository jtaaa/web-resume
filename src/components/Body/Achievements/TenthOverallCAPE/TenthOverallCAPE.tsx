import React from 'react';
import Box from 'components/Box';
import ExternalLink from 'components/ExternalLink';
import Heading from '../Heading';

const TenthOverallCAPE = () => {
  return (
    <Box>
      <Heading
        title={
          <>
            10th Overall{' '}
            <ExternalLink href="https://www.cxc.org/examinations/cape">
              CAPE
            </ExternalLink>{' '}
            CS
          </>
        }
        year="2014"
      />
    </Box>
  );
};

export default TenthOverallCAPE;
