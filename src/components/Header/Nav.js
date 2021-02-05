// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Nav = () => (
  <ul className="nav">
    <li className="nav__link">
      <Link to="/">Retour à l'accueil</Link>
    </li>
    <li className="nav__link">
      <Link to="/brands">Par éditeur</Link>
    </li>
    <li className="nav__link">
      <Link to="/types">Par type</Link>
    </li>
    <li className="nav__link">
      <Link to="/ages">Par âges</Link>
    </li>
    <li className="nav__link">
      <Link to="/about">Qui suis-je ?</Link>
    </li>
    <li className="nav__link">
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
);

// == Export
export default Nav;
