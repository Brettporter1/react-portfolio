import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/About'>
          <About />
        </Route>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
