import React from 'react';

import Header from 'components/Header';
import Body from 'components/Body';
import Box from 'components/Box';

const App: React.FC = () => {
  return (
    <section className="sheet">
      <Box p={4}>
        <Header />
        <Body />
      </Box>
    </section>
  );
};

export default App;
