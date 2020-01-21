import React from 'react';
import Box from 'components/Box';
import Heading from '../Heading';
import TeleiosLogo from './teleios-logo.png';
import Body from 'components/text/Body';
import Highlight from 'components/text/Highlight';
import ExternalLink from 'components/ExternalLink';

const Teleios = () => {
  return (
    <Box>
      <Heading
        company="Teleios Systems Limited"
        period="June-Aug 2017"
        role="Software Developer"
        logoSrc={TeleiosLogo}
        logoAlt="Teleios Systems Limited logo"
      />
      <Body>
        Contributed to full solution for the government of Bahamas&apos; new{' '}
        <ExternalLink href="https://www.nhibahamas.gov.bs/">
          NHI program
        </ExternalLink>{' '}
        by developing a .NET core web service to <Highlight>validate</Highlight>{' '}
        and <Highlight>sync</Highlight> user info between Bahamian databases
        with <Highlight>transient fault handling</Highlight> via{' '}
        <ExternalLink href="https://github.com/App-vNext/Polly">
          Polly
        </ExternalLink>
        .
      </Body>
      <Body>
        <Highlight>Hosted</Highlight> the{' '}
        <ExternalLink href="https://www.teleioscodejam.com/news/2017/8/11/powar-hour-live">
          10th Power Hour Live session
        </ExternalLink>
        , a discussion/showcase of current, exciting technologies.
      </Body>
      <Body>
        Created{' '}
        <ExternalLink href="https://www.teleioscodejam.com/">
          Teleios Code Jam
        </ExternalLink>{' '}
        bot using MS Bot Framework and Luis.ai. Deployed to{' '}
        <ExternalLink href="https://www.facebook.com/TeleiosCodeJam/">
          TCJ FB page
        </ExternalLink>{' '}
        and Cortana.
      </Body>
    </Box>
  );
};

export default Teleios;
