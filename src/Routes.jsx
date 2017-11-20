import React from 'react';
import { Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/views/Home';
import PortfolioPage from './components/views/PortfolioPage';
import NotFound from './components/views/NotFound';
import data from './store/portfolio/data';

const Router = () => (
  <div style={{ height: '100%' }}>
    <BrowserRouter>
      <div>
        <Route path="/" component={ScrollToTop} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/portfolio/penta" render={() => <PortfolioPage data={data.penta} />} />
          <Route exact path="/portfolio/kik" render={() => <PortfolioPage data={data.kik} />} />
          <Route exact path="/portfolio/wave" render={() => <PortfolioPage data={data.wave} />} />
          <Route
            exact
            path="/portfolio/sparkgig"
            render={() => <PortfolioPage data={data.sparkgig} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default Router;
