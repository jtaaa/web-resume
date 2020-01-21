import React from 'react';

import Header from 'components/Header';
import Body from 'components/Body';
import Footer from 'components/Footer';
import Box from 'components/Box';

const App: React.FC = () => {
  return (
    <body className="A5">
      <section className="sheet">
        <Box>
          <Header />
          <Body />
          <Footer />
        </Box>
      </section>
    </body>
  );
};

export default App;
