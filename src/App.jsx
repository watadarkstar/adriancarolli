import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './components/views/Home';

const App = () => (
  <div style={{ height: '100%' }}>
    <Helmet>
      <title>Adrian Carolli</title>
    </Helmet>
    <Home />
  </div>
);

export default App;
