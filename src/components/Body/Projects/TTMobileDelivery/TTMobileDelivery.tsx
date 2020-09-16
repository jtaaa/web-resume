import React from 'react';
import Box from 'components/Box';
import Body from 'components/text/Body';
import Highlight from 'components/text/Highlight';
import Heading from '../Heading';

const TTMobileDelivery = () => {
  return (
    <Box>
      <Heading
        title="T&T Mobile Delivery"
        techStack="React, TypeScript, Styled-Components, Storybook, Firebase"
        year="2019"
        href="https://github.com/SYSTT/tntmobiledelivery"
      />
      <Body>
        • <Highlight>Developed</Highlight> and <Highlight>launched</Highlight>{' '}
        solution to allow users to buy and trade iPhones safely, quickly and
        easily in Trinidad and Tobago.
      </Body>
    </Box>
  );
};

export default TTMobileDelivery;
