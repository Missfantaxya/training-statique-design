// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const About = () => (
  <div className="about">
    <div className="about__wrapper">
      <h2 className="about__Title">Qui suis-je et pourquoi ce site ?</h2>
      <p className="about__subTitle">Je me présente :</p>
    </div>
    <div className="about__info">
      <div className="about__avatar"> </div>
      <div className="about__text">
        <p className="about__username">Alexia Skrzypczak</p>
        <p className="about__excerpt">Je suis Alexia.Je suis développeuse full stack web et web mobile et j'ai fait ce site pour m'entraîner à l'interface utilisateur en react.js</p>
      </div>
    </div>
  </div>
);

// == Export
export default About;
