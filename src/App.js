import React, {Fragment, Suspense, lazy} from 'react';
import {Notification} from './components/Notifications/Notifications';
import {BigLoader} from './components/Loader/Loader'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const Home = lazy(() => import('./layouts/Home/Home'))
const Admin = lazy(() => import('./layouts/Admin/Admin'))
const Recommandations = lazy(() => import('./layouts/Recommandations/Recommandations'))
const Conseils = lazy(() => import('./layouts/Conseils/Conseils'))
const About = lazy(() => import('./layouts/About/About'))
const Header = lazy(() => import('./components/Header/Header'))

function App() {
  return (
    <Router>
      <Suspense 
        fallback={<div className="d-flex flex-column justify-content-center align-items-center" style={{"height": "100vh"}}><BigLoader /></div>}>
        <Header />
        <Fragment>
          <Notification />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/mesures">
              <Recommandations />
            </Route>
            <Route exact path="/conseils">
              <Conseils />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Fragment>
      </Suspense>
    </Router>
  );
}

export default App;
