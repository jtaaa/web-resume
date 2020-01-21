import React from 'react';
import Box from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';

import TTMobileDelivery from './TTMobileDelivery';
import BFAS from './BFAS';
import CVDRiskCalculator from './CVDRiskCalculator';
import STAT230CourseNotes from './STAT230CourseNotes';

const Projects = () => {
  return (
    <Box>
      <Trafalgar>Projects</Trafalgar>
      <TTMobileDelivery />
      <BFAS />
      <CVDRiskCalculator />
      <STAT230CourseNotes />
    </Box>
  );
};

export default Projects;
