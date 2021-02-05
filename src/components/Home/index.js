// == import npm
import React from 'react';
import { Link } from "react-router-dom";

// == import
import './styles.scss';

// == composant
const Home = () => (
    <div>
      <div id="hexagons">
        <ul id="categories" className="clr">
          <li>
            <div className="flip-container">
              <div className="flipper">
              <div className="front home__brands">
                <div className="flip-content title-xs">
                    <p>Editeurs de jeux</p>
                  </div>
                </div>
                <div className="back">
                  <div className="flip-content">
                    <p>Je cherche un jeux selon son éditeur</p>
                    <p>
                        <i className="fa fa-arrow-circle-right">
                          <Link to="/brands">J'y vais</Link>
                        </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flip-container" //onTouchStart="this.classList.toggle('hover');"
            >
              <div className="flipper">
                <div className="front home__types">
                  <div className="flip-content title-xs">
                    <p>Types de jeux</p>
                  </div>
                </div>
                <div className="back">
                  <div className="flip-content">
                    <p>Je cherche un jeux selon son mode de jeux</p>
                    <p>
                        <i className="fa fa-arrow-circle-right">
                          <Link to="/types">J'y vais</Link>
                        </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flip-container">
              <div className="flipper">
                <div className="front home__ages">
                  <div className="flip-content title-xs">
                    <p>A partir de quel âges ?</p>
                  </div>
                </div>
                <div className="back">
                  <div className="flip-content">
                    <p>Je cherche un jeux selon l'âge minimum</p>
                    <p>
                        <i className="fa fa-arrow-circle-right">
                          <Link to="/ages">J'y vais</Link>
                        </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flip-container">
              <div className="flipper">
              <div className="front home__about">
                <div className="flip-content title-xs">
                    <p>A propos</p>
                  </div>
                </div>
                <div className="back">
                  <div className="flip-content">
                    <p>Qui suis-je ?</p>
                      <p>Pourquoi ce site ?</p>
                    <p>
                      <i className="fa fa-arrow-circle-right">
                        <Link to="/about">J'y vais</Link>
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flip-container">
              <div className="flipper">
              <div className="front home__contact">
                <div className="flip-content title-xs">
                    <p>Contact</p>
                  </div>
                </div>
                <div className="back">
                  <div className="flip-content">
                    <p>Vous aimez mon travail?</p>
                    <p>
                      <i className="fa fa-arrow-circle-right">
                        <Link to="/contact">Contactez-moi</Link>
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
);

// == export
export default Home;
