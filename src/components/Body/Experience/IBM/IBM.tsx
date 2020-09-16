import React from 'react';
import Box from 'components/Box';
import Heading from '../Heading';
import IBMLogo from './ibm-logo.svg';
import Highlight from 'components/text/Highlight';
import Body from 'components/text/Body';
import ExternalLink from 'components/ExternalLink';

const IBM = () => {
  return (
    <Box>
      <Heading
        company="IBM Canada Toronto Labs"
        period="Toronto, Canada. Jan-May 2019"
        role="Cloud Platform Project Developer"
        logoSrc={IBMLogo}
        logoAlt="IBM logo"
      />
      <Body>
        • <Highlight>Unified and secured</Highlight> sign-in experience across
        full range of internal microservices by implementing an{' '}
        <Highlight>OAuth2 Central Authentication System.</Highlight>
      </Body>
      <Body>
        •{' '}
        <ExternalLink href="https://docs.google.com/document/d/1dWUIDsqhAlLckbYv0UuvNjSVnPTHtwYG0zfecjwDPAU/edit?usp=sharing">
          <Highlight>Optimized page load time</Highlight> and{' '}
          <Highlight>caching strategy</Highlight>
        </ExternalLink>{' '}
        for Client Management Tool, used by all Technical Account Managers.
      </Body>
      <Body>
        • Drove task management/recording tool, both{' '}
        <Highlight>backend API</Highlight> and{' '}
        <Highlight>frontend UI</Highlight>, from conception to production{' '}
        <Highlight>incorporating feedback</Highlight> from TAMs, and{' '}
        <Highlight>integrating</Highlight> with existing tools, in an agile team
        environment.
      </Body>
    </Box>
  );
};

export default IBM;
