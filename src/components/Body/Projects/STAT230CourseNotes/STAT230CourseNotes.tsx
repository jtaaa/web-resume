import React from 'react';
import Box from 'components/Box';
import Heading from '../Heading';
import Body from 'components/text/Body';

const STAT230CourseNotes = () => {
  return (
    <Box>
      <Heading
        title="STAT 230 Course Notes"
        techStack="LaTeX"
        year="2017"
        href="https://github.com/jtaaa/STAT230-Course-Notes"
      />
      <Body>
        Creating fully-fledged book including proofs, theorems, graphs and
        original examples, for STAT 230 at UW.
      </Body>
    </Box>
  );
};

export default STAT230CourseNotes;
