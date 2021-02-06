// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import GameContent from './GameContent';
import GamePicture from './GamePicture';

// == Composant
const Game = ({ gameTitle }) => (
  <div className="game">
    <div className="game__list">
      <div className="game__title">
        <div className="game__item">{gameTitle}
          <div className="game__info">
            <GamePicture />
            <GameContent />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Game.propTypes = {
  gameTitle: PropTypes.string.isRequired,
};

// == Export
export default Game;
