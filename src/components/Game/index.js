// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import GameContent from './GameContent';
import GamePicture from './GamePicture';

// == Composant
//TODO faire sous forme de carte avec un effet
const Game = (props) => (
  <ul className="game">
    <li className="game__item">{props.gameTitle}
      <div className="game__info">
        <GamePicture />
        <GameContent />
      </div>
    </li>
  </ul>
);

Game.propTypes = {
  gameTitle: PropTypes.string.isRequired,
};

// == Export
export default Game;
