// == Import npm
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

// == Import
import './styles.scss';
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Brands from 'src/components/Brands';
import Types from 'src/components/Types';
import Ages from 'src/components/Ages';
import About from 'src/components/About';
import Contact from 'src/components/Contact';

// == Composant
const Play = () => (
  <div className="play">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/brands">
        <Brands />
      </Route>
      <Route exact path="/types">
        <Types />
      </Route>
      <Route exact path="/ages">
        <Ages />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  </div>
);

// == Export
export default Play;
