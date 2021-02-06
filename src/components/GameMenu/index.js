// == import npm
import React from 'react';

// == import
import './styles.scss';
import Game from 'src/components/Game';


// == composant
const GameMenu = (props) => (
  <div className="gameMenu">
    <Game
      gameTitle={props.gameName}
    />
  </div>
);

// == export
export default GameMenu;
