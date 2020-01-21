import React from 'react';
import Box from 'components/Box';
import ExternalLink from 'components/ExternalLink';
import Canon from 'components/text/Canon';
import Body from 'components/text/Body';
import { HeaderContainer } from './elements';

const Header = () => {
  return (
    <HeaderContainer display="flex" alignItems="center">
      <Canon>Joshua Allum</Canon>
      <Box flex={1}>
        <Body display="flex" justifyContent="center">
          <ExternalLink href="https://jallum.xyz/">jallum.xyz</ExternalLink>
          <ExternalLink ml={3} href="mailto:joshuatallum@gmail.com">
            joshuatallum
          </ExternalLink>
          <ExternalLink ml={3} href="tel:+16477814107">
            647-781-4107
          </ExternalLink>
        </Body>
        <Body display="flex" justifyContent="center">
          <ExternalLink ml={3} href="https://github.com/jtaaa">
            jtaaa
          </ExternalLink>
          <ExternalLink ml={3} href="https://linkedin.com/in/joshua-allum/">
            joshua-allum
          </ExternalLink>
        </Body>
      </Box>
    </HeaderContainer>
  );
};

export default Header;
