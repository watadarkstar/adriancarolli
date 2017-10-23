import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './components/home/Home';

const App = () => (
  <div>
    <Helmet>
      <title>Adrian Carolli</title>
    </Helmet>
    <Home />
  </div>
);

export default App;
