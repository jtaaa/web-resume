import React from 'react';
import Box from 'components/Box';
import ExternalLink from 'components/ExternalLink';
import Body from 'components/text/Body';
import Heading from '../Heading';
import Highlight from 'components/text/Highlight';

const CVDRiskCalculator = () => {
  return (
    <Box>
      <Heading
        title="Cadiovascular Disease Risk Calculator"
        techStack="NodeJS, React, JavaScript"
        year="2018"
        href="https://github.com/jtaaa/CVD-Risk-Calculator-Backend"
      />
      <Body>
        • Collaborated with Prof. Amalia Hosein of{' '}
        <ExternalLink href="https://utt.edu.tt/">
          University of Trinidad and Tobago
        </ExternalLink>{' '}
        as part of her doctorate thesis.
      </Body>
      <Body>
        • Implemented Prof. Hosein&apos;s{' '}
        <Highlight>risk calculation algorithm</Highlight> in NodeJS API and
        developed{' '}
        <ExternalLink href="https://github.com/jtaaa/CVD-Risk-Calculator-Frontend">
          POC React web app
        </ExternalLink>
        .
      </Body>
      <Body>
        • Backend API is <Highlight>in use</Highlight> by a mobile app developed
        by UTT undergraduate students as a term project.
      </Body>
    </Box>
  );
};

export default CVDRiskCalculator;
