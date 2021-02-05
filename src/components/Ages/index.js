// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Game from 'src/components/Game';

// == Composant
const Age = () => (
  <div className="age">
      <h2>Pour qui ?</h2>
      <ul>
        <li>A partir de 4 ans
          <ul>
            <Game gameTitle="Jungle speed" />
            <Game gameTitle="Dobble" />
          </ul>
        </li>
        <li>A partie de 5 ans
          <ul>
          <Game gameTitle="Cranium" />
          </ul>
        </li>
        <li>A partir de 6 ans
          <ul>
            <Game gameTitle="1000 bornes" />
          </ul>
        </li>
        <li>A partir de 7 ans
        <ul>
            <Game gameTitle="Krosmaster : Arena" />
            <Game gameTitle="Othello" />
            <Game gameTitle="Mysterium" />
          </ul>
        </li>
        <li>A partir de 8 ans
          <ul>
            <Game gameTitle="Monopoly" />
            <Game gameTitle="Dixit" />
          </ul>
        </li>
        <li>A partir de 10 ans
          <ul>
            <Game gameTitle="Les loups-garous de Thiercelieux" />
          </ul>
        </li>
      </ul>
  </div>
);

// == Export
export default Age;
