// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Nav from './Nav';
import banniere from 'src/assets/images/banniere.png';
// == Composant
const Header = () => (
  <div className="header__wrapper">
      <img className="header__img" src={banniere} alt="bannière play" />
    <div className="header__text">
      <h1 className="header__title">Et toi à quoi tu joues ?</h1>
      <Nav />
    </div>
  </div>
);

// == Export
export default Header;
