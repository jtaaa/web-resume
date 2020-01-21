import React from 'react';
import Box, { BoxProps } from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';

import WatsonBuildFinalist from './WatsonBuildFinalist';
import TenthOverallCAPE from './TenthOverallCAPE';

type AchievementsProps = BoxProps;
const Achievements: React.FC<AchievementsProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar>Achievements</Trafalgar>
      <Box>
        <WatsonBuildFinalist />
        <TenthOverallCAPE />
      </Box>
    </Box>
  );
};

export default Achievements;
