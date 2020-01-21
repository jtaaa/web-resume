import React from 'react';
import Box from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';

import WatsonBuildFinalist from './WatsonBuildFinalist';
import TenthOverallCAPE from './TenthOverallCAPE';

const Achievements = () => {
  return (
    <Box>
      <Trafalgar>Achievements</Trafalgar>
      <Box>
        <WatsonBuildFinalist />
        <TenthOverallCAPE />
      </Box>
    </Box>
  );
};

export default Achievements;
