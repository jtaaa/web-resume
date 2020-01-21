import React from 'react';
import Box, { BoxProps } from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';

import WatsonBuildFinalist from './WatsonBuildFinalist';
import TenthOverallCAPE from './TenthOverallCAPE';
import NationalOpenScholarship from './NationalOpenScholarship';
import MusicFestival from './MusicFestival';
import ChiefScoutAward from './ChiefScoutAward';

type AchievementsProps = BoxProps;
const Achievements: React.FC<AchievementsProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar>Achievements</Trafalgar>
      <Box pt={1}>
        <WatsonBuildFinalist />
        <NationalOpenScholarship />
        <ChiefScoutAward />
        <TenthOverallCAPE />
        <MusicFestival />
      </Box>
    </Box>
  );
};

export default Achievements;
