import React from 'react';
import Box from 'components/Box';
import ExternalLink from 'components/ExternalLink';
import Canon from 'components/text/Canon';
import { HeaderContainer } from './elements';

const Header = () => {
  return (
    <HeaderContainer textAlign="center">
      <Canon>Joshua Allum</Canon>
      <Box display="flex" justifyContent="center">
        <ExternalLink href="https://jallum.xyz/">jallum.xyz</ExternalLink>
        <ExternalLink pl={3} href="mailto:joshuatallum@gmail.com">
          joshuatallum
        </ExternalLink>
        <ExternalLink pl={3} href="tel:+16477814107">
          647-781-4107
        </ExternalLink>
      </Box>
      <Box display="flex" justifyContent="center">
        <ExternalLink href="https://github.com/jtaaa">jtaaa</ExternalLink>
        <ExternalLink pl={3} href="https://linkedin.com/in/joshua-allum/">
          joshua-allum
        </ExternalLink>
      </Box>
    </HeaderContainer>
  );
};

export default Header;
