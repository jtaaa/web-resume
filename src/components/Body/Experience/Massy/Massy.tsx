import React from 'react';
import Box from 'components/Box';
import Heading from '../Heading';
import MassyLogo from './massy-logo.png';
import Body from 'components/text/Body';
import Highlight from 'components/text/Highlight';

const Massy = () => {
  return (
    <Box>
      <Heading
        company="Massy Technologies InfoCom"
        period="May-Aug 2018"
        role="Software Dev/Data Science Assistant"
        logoSrc={MassyLogo}
        logoAlt="Massy Technologies InfoCom logo"
      />
      <Body>
        • Constructed data pipelines using{' '}
        <Highlight>Market Basket Analysis</Highlight> and{' '}
        <Highlight>Cluster Analysis</Highlight>. Integrated pipeline with Massy
        Stores&apos; expansion into online sales to{' '}
        <Highlight>predict customers&apos; carts</Highlight> and{' '}
        <Highlight>recommend items</Highlight>.
      </Body>
      <Body>
        • Produced statistics and tangible metrics of inter-branch performance
        based on large datasets (several GB) of transactions using Pandas,
        Plotly, and Watson.
      </Body>
    </Box>
  );
};

export default Massy;
