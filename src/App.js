import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Development from './pages/Development';
import About from './pages/About';
import Footer from './components/Footer';
import Design from './pages/Design';
import Photo from './pages/Photography';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab);

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/development'>
            <Development />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Design'>
            <Design />
          </Route>
          <Route path='/Photography'>
            <Photo />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
