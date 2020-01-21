import React from 'react';
import Box from 'components/Box';
import ExternalLink from 'components/ExternalLink';
import Canon from 'components/text/Canon';
import Body from 'components/text/Body';
import { HeaderContainer, LinksGrid } from './elements';

import Globe from './Globe.svg';
import Email from './Email.svg';
import Phone from './Phone.svg';
import Github from './Github.svg';
import LinkedIn from './LinkedIn.svg';

const Header = () => {
  return (
    <HeaderContainer display="flex" alignItems="center">
      <Canon>Joshua Allum</Canon>
      <LinksGrid flex={1}>
        <ExternalLink href="https://jallum.xyz/">
          <Box display="flex" alignItems="center">
            <img height={11} src={Globe} alt="Globe" />
            <Body ml={1}>jallum.xyz</Body>
          </Box>
        </ExternalLink>
        <ExternalLink ml={3} href="mailto:joshuatallum@gmail.com">
          <Box display="flex" alignItems="center">
            <img height={11} src={Email} alt="Email" />
            <Body ml={1}>joshuatallum</Body>
          </Box>
        </ExternalLink>
        <ExternalLink ml={3} href="tel:+16477814107">
          <Box display="flex" alignItems="center">
            <img height={11} src={Phone} alt="Phone" />
            <Body ml={1}>647-781-4107</Body>
          </Box>
        </ExternalLink>
        <div />
        <ExternalLink ml={3} href="https://github.com/jtaaa">
          <Box display="flex" alignItems="center">
            <img height={11} src={Github} alt="Github" />
            <Body ml={1}>jtaaa</Body>
          </Box>
        </ExternalLink>
        <ExternalLink ml={3} href="https://linkedin.com/in/joshua-allum/">
          <Box display="flex" alignItems="center">
            <img height={11} src={LinkedIn} alt="LinkedIn" />
            <Body ml={1}>joshua-allum</Body>
          </Box>
        </ExternalLink>
      </LinksGrid>
    </HeaderContainer>
  );
};

export default Header;
