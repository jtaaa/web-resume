import React from 'react';
import Box, { BoxProps } from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';
import DoublePica from 'components/text/DoublePica';
import Body from 'components/text/Body';

type SkillsetProps = BoxProps;
const Skillset: React.FC<SkillsetProps> = boxProps => {
  return (
    <Box {...boxProps}>
      <Trafalgar>Skillset</Trafalgar>
      <Box>
        <DoublePica fontSize={3} pt={1}>
          3+ years experience & shipped products
        </DoublePica>
        <Body fontSize={2} textAlign="center">
          TypeScript, JavaScript (ES6+), React, Storybook, testing-library,
          testcafe, TravisCI, React-Native, Angular, HTML5, CSS3, Git, Node.js,
          Express, MongoDB, Firebase, GCP, Docker, LaTeX
        </Body>
        <DoublePica fontSize={3} pt={1}>
          Some experience & comfortable with
        </DoublePica>
        <Body fontSize={2} textAlign="center">
          Next.js, webpack, GraphQL, Apollo, Jenkins, AWS, Nginx, C++, C#, .NET,
          SQL, PostgreSQL, R, Python, Flask, Plotly, Matplotlib, Numpy, Pandas,
          OpenCV
        </Body>
      </Box>
    </Box>
  );
};

export default Skillset;
