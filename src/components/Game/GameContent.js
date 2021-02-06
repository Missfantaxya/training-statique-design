// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const GameContent = () => (
  <div className="gameContent">
    <ul className="gameContent__article">
      <li className="gameContent__brand">éditeur</li>
      <li className="gameContent__type">type du jeux</li>
      <li className="gameContent__age">âge minimum</li>
      <li className="gameContent__playeurNumber">nombre de joueurs</li>
      <li className="gameContent__description">description du jeux : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque non magnam numquam! Impedit harum vitae nemo fugit unde libero adipisci omnis earum voluptatem, delectus cupiditate. Veritatis perspiciatis officia eius nostrum!</li>
    </ul>
  </div>
);

// == Export
export default GameContent;
