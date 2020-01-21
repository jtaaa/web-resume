import React from 'react';
import Box from 'components/Box';

type HighlightProps = {
  children: React.ReactNode;
};
const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return (
    <Box display="inline" fontWeight="bold">
      {children}
    </Box>
  );
};

export default Highlight;
