// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Game from 'src/components/Game';

// == Composant
const Brands = () => (
  <div className="brands">
    <h2>Tous nos éditeurs</h2>
      <ul>
        <li>Asmodee
          <ul>
            <Game gameTitle="Jungle speed" />
            <Game gameTitle="Dobble" />
          </ul>
        </li>
        <li>Ankama
        <ul>
            <Game gameTitle="Krosmaster : Arena" />
          </ul>
        </li>
        <li>Dujardin
          <ul>
            <Game gameTitle="1000 bornes" />
          </ul>
        </li>
        <li>Hasbro<ul>
          <Game gameTitle="Monopoly" />
          <Game gameTitle="Cranium" />
          </ul>
        </li>
        <li>Lansay
          <ul>
            <Game gameTitle="Othello" />
          </ul>
        </li>
        <li>Libellud
          <ul>
            <Game gameTitle="Dixit" />
            <Game gameTitle="Mysterium" />
          </ul>
        </li>
        <li>Lui-même
          <ul>
            <Game gameTitle="Les loups-garous de Thiercelieux" />
          </ul>
        </li>
      </ul>
  </div>
);

// == Export
export default Brands;
