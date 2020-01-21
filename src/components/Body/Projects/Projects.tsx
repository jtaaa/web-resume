import React from 'react';
import Box, { BoxProps } from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';

import TTMobileDelivery from './TTMobileDelivery';
import BFAS from './BFAS';
import CVDRiskCalculator from './CVDRiskCalculator';
import STAT230CourseNotes from './STAT230CourseNotes';

type ProjectsProps = BoxProps;
const Projects: React.FC<ProjectsProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar>Projects</Trafalgar>
      <TTMobileDelivery />
      <BFAS />
      <CVDRiskCalculator />
      <STAT230CourseNotes />
    </Box>
  );
};

export default Projects;
