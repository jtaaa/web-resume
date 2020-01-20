import React from 'react';
import './App.css';

import Header from 'components/Header';
import Body from 'components/Body';
import Footer from 'components/Footer';

const App: React.FC = () => {
  return (
    <body className="A5">
      <section className="sheet">
        <Header />
        <Body />
        <Footer />
      </section>
    </body>
  );
};

export default App;
