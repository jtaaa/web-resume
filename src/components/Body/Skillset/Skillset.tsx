import React from 'react';
import Box, { BoxProps } from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';
import DoublePica from 'components/text/DoublePica';
import Body from 'components/text/Body';

type SkillsetProps = BoxProps;
const Skillset: React.FC<SkillsetProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar pt={1}>Skillset</Trafalgar>
      <Box>
        <DoublePica fontSize={1}>
          3+ years experience & shipped product
        </DoublePica>
        <Body fontSize={0} textAlign="center">
          JavaScript (ES6+), TypeScript, React, Storybook, Styled-Components,
          testing-library, testcafe, React-Native, Angular, HTML5, CSS3, Git,
          NodeJS, MongoDB, Firebase, Docker, LaTeX
        </Body>
        <DoublePica fontSize={1}>Some experience & comfortable with</DoublePica>
        <Body fontSize={0} textAlign="center">
          C++, C#, .NET, webpack, SQL, PostgreSQL, GCP, AWS, Nginx, R, Python,
          Flask, Plotly, Matplotlib, Numpy, Pandas, OpenCV, scikit-image
        </Body>
      </Box>
    </Box>
  );
};

export default Skillset;
