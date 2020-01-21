import React from 'react';
import { ExternalLinkContainer, ExternalLinkContainerProps } from './elements';

type ExternalLinkProps = ExternalLinkContainerProps & {
  href: string;
  children: React.ReactNode;
};
const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  ...containerProps
}) => {
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
