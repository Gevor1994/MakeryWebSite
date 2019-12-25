import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Who = lazy(() => import('../pages/Who'));
const What = lazy(() => import('../pages/What'));
const Team = lazy(() => import('../pages/Team'));
const Careers = lazy(() => import('../pages/Careers'));
const Contact = lazy(() => import('../pages/Contact'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Cafe = lazy(() => import('../containers/Cafe'));

class AppRouter extends Component {
  render() {
    return (
      < Suspense fallback={< div />}>
        <Switch>
          <Route exact path="/:locale/" render={props => <Home {...props} />} />
          <Route exact path="/:locale/who-are-we" render={props => <Who {...props} />} />
          <Route exact path="/:locale/what-we-do" render={props => <What {...props} />} />
          <Route exact path="/:locale/team" render={props => <Team {...props} />} />
          <Route exact path="/:locale/careers" render={props => <Careers {...props} />} />
          <Route exact path="/:locale/portfolio" render={props => <Portfolio {...props} />} />
          <Route exact path="/:locale/contacts" render={props => <Contact {...props} />} />
          <Route exact path="/:locale/bar" render={props => <Cafe {...props} />} />
        </Switch>
      </Suspense >
    );
  }
}

export default AppRouter;