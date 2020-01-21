import React from 'react';

import Header from 'components/Header';
import Body from 'components/Body';
import Box from 'components/Box';

const App: React.FC = () => {
  return (
    <body className="A5">
      <section className="sheet">
        <Box p={3}>
          <Header />
          <Body />
        </Box>
      </section>
    </body>
  );
};

export default App;
