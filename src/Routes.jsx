import React from 'react';
import { Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/views/Home';
import PortfolioPage from './components/views/PortfolioPage';
import NotFound from './components/views/NotFound';
import data from './store/portfolio/data';

ReactGA.initialize('UA-28934209-5');

const Router = () => (
  <div style={{ height: '100%' }}>
    <BrowserRouter>
      <div style={{ height: '100%' }}>
        <Route path="/" component={RouteChange} />
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

const RouteChange = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
  window.scrollTo(0, 0);
  return null;
};

export default Router;
