import React from 'react';
import { ExternalLinkContainer, ExternalLinkContainerProps } from './elements';

type ExternalLinkProps = ExternalLinkContainerProps & {
  href: string;
  children: React.ReactNode;
};
const ExternalLink = ({
  href,
  children,
  ...containerProps
}: ExternalLinkProps) => {
  return (
    <ExternalLinkContainer
      {...containerProps}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </ExternalLinkContainer>
  );
};

export default ExternalLink;
