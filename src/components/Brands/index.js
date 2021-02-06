// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import CardName from 'src/components/CardName';
import GameMenu from 'src/components/GameMenu';


// == Composant
const Brands = () => (
  <div className="brands">
    <div className="brands__first"> </div>
    <div className="brands__second"> </div>
    <div className="brands__third"> </div>
    <div className="brands__container">
      <div className="brands__wrapper">
        <h2 className="brands__title">Tous nos éditeurs</h2>
        <ul className="brands__list">
          <nav className="brands__menu">
            <div className="brands__item">
              <CardName
                cardTitle="Asmodee"
              />
              <ul className="brands__listGames">
                <GameMenu gameName="Jungle speed"/>
                <GameMenu gameName="Dobble"/>
              </ul>
            </div>
          </nav>
          {/* <a href="#click" className="brands__menu">
            <li className="brands__item">Ankama
            <ul className="brands__listGames">
                <Game gameTitle="Krosmaster : Arena" />
              </ul>
            </li>
          </a>
          <a href="#click" className="brands__menu">
            <li className="brands__item">Dujardin
              <ul className="brands__listGames">
                <Game gameTitle="1000 bornes" />
              </ul>
            </li>
          </a>
          <a href="#click" className="brands__menu">
            <li className="brands__item">Hasbro
              <ul className="brands__listGames">
                <Game gameTitle="Monopoly" />
                <Game gameTitle="Cranium" />
                </ul>
              </li>
          </a>
          <a href="#click" className="brands__menu">
            <li className="brands__item">Lansay
              <ul className="brands__listGames">
                <Game gameTitle="Othello" />
              </ul>
            </li>
          </a>
          <a href="#click" className="brands__menu">
            <li className="brands__item">Libellud
              <ul className="brands__listGames">
                <Game gameTitle="Dixit" />
                <Game gameTitle="Mysterium" />
              </ul>
            </li>
          </a>
          <a href="#click" className="brands__menu">
            <li className="brands__item">Lui-même
              <ul className="brands__listGames">
                <Game gameTitle="Les loups-garous de Thiercelieux" />
              </ul>
            </li>
          </a> */}
        </ul>
      </div>
    </div>
  </div>
);

// == Export
export default Brands;
