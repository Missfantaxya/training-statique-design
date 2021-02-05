// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Game from 'src/components/Game';

// == Composant
const Types = () => (
  <div>
    <h2>Toutes nos types de jeux</h2>
    <ul>
      <li>Jeux de cartes
          <ul>
          <Game gameTitle="1000 bornes" />
          <Game gameTitle="Jungle speed" />
          <Game gameTitle="Dobble" />
        </ul>
      </li>
      <li>Jeux d'observation
          <ul>
          <Game gameTitle="Jungle speed" />
          <Game gameTitle="Dobble" />
        </ul>
      </li>
      <li>Jeux de rapidité
          <ul>
          <Game gameTitle="Jungle speed" />
          <Game gameTitle="Dobble" />
        </ul>
      </li>
      <li>Jeux de plateau
          <ul>
          <Game gameTitle="Krosmaster : Arena" />
          <Game gameTitle="Monopoly" />
          <Game gameTitle="Cranium" />
        </ul>
      </li>
      <li>Jeux de stratégie
          <ul>
          <Game gameTitle="Krosmaster : Arena" />
          <Game gameTitle="Othello" />
        </ul>
      </li>
      <li>Jeux de réflexion
          <ul>
          <Game gameTitle="Cranium" />
          <Game gameTitle="Othello" />
        </ul>
      </li>
      <li>Jeux d'imagination'
          <ul>
          <Game gameTitle="Dixit" />
        </ul>
      </li>
      <li>Jeux de coopération'
          <ul>
          <Game gameTitle="Mysterium" />
        </ul>
      </li>
      <li>Jeux de rôle
          <ul>
          <Game gameTitle="Les loups-garous de Thiercelieux" />
        </ul>
      </li>
    </ul>
  </div>
);

// == Export
export default Types;
