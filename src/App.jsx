import React from 'react';
import { Helmet } from 'react-helmet';
import HomePage from './components/home/HomePage';

const App = () => (
  <div>
    <Helmet>
      <title>Adrian Carolli</title>
    </Helmet>
    <HomePage />
  </div>
);

export default App;
