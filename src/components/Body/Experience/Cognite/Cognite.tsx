import React from 'react';
import Box from 'components/Box';
import Body from 'components/text/Body';
import Heading from '../Heading';
import CogniteLogo from './cognite-logo.png';
import ExternalLink from 'components/ExternalLink';
import Highlight from 'components/text/Highlight';

const Cognite = () => {
  return (
    <Box>
      <Heading
        company="Cognite AS"
        period="Oslo, Norway. Sep-Dec 2019"
        role="Front-end Engineer"
        logoSrc={CogniteLogo}
        logoAlt="Cognite AS logo"
      />
      <Body>
        • Worked daily on front-end of{' '}
        <ExternalLink href="https://www.cognite.com/business-applications/asset-data-insight">
          Asset Data Insight
        </ExternalLink>{' '}
        application, writing high performance, re-useable code with monthly
        sprints and rollouts.
      </Body>
      <Body>
        • Implemented{' '}
        <Highlight>design curve overlays on scatterplots</Highlight> with option
        to upload CSV or manually enter X-Y pairs, solving company-wide{' '}
        <ExternalLink href="https://www.enggcyclopedia.com/2011/09/pump-performance-curves">
          pump performance curve
        </ExternalLink>{' '}
        use case.
      </Body>
      <Body>
        • Significantly improved <Highlight>development experience</Highlight>,{' '}
        <Highlight>linting</Highlight> and{' '}
        <Highlight>testing utilities</Highlight> of custom graphing library{' '}
        <ExternalLink href="https://github.com/cognitedata/griff-react">
          Griff
        </ExternalLink>
        .
      </Body>
    </Box>
  );
};

export default Cognite;
