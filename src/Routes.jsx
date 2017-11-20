import React from 'react';
import { Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/views/Home';
import Penta from './components/views/Penta';
import NotFound from './components/views/NotFound';

const App = () => (
  <div style={{ height: '100%' }}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/portfolio/penta" render={() => <Penta />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
