import React from 'react';
import Box from 'components/Box';
import Body from 'components/text/Body';
import ExternalLink from 'components/ExternalLink';
import Highlight from 'components/text/Highlight';
import Heading from '../Heading';
import SellYourStuffLogo from './sellyourstuff-logo.jpg';

const SellYourStuff = () => {
  return (
    <Box>
      <Heading
        company="Sell Your Stuff Ltd"
        period="POS, Trinidad. June 2019-Present"
        role="Co-founder & CTO"
        logoSrc={SellYourStuffLogo}
        logoAlt="Sell Your Stuff AS logo"
      />
      <Body>
        • Building{' '}
        <ExternalLink href="https://github.com/SYSTT/sys-monorepo">
          e-commerce platform
        </ExternalLink>{' '}
        for <Highlight>local small businesses</Highlight> that leverages{' '}
        <ExternalLink href="https://wipaycaribbean.com">WiPay</ExternalLink> and{' '}
        <ExternalLink href="https://www.universalpackagesys.com">
          UPSL
        </ExternalLink>{' '}
        APIs to handle online payments and delivery respectively.
      </Body>
      <Body>
        • <Highlight>Launched</Highlight>{' '}
        <ExternalLink href="https://github.com/SYSTT/sellyourstuff">
          beta version
        </ExternalLink>{' '}
        with 20+ stores and facilitated several transactions and deliveries in a{' '}
        <Highlight>fully automated</Highlight> fashion.
      </Body>
    </Box>
  );
};

export default SellYourStuff;
